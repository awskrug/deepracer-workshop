---
title: 강화 학습 모델을 훈련하는 방법
weight: 203
---

### RL 모델 훈련

훈련은 반복적인 과정입니다. 시뮬레이터에서 에이전트는 환경을 탐색하고 경험을 쌓습니다. 수집 된 경험은 신경망을 주기적으로 업데이트하는 데 사용되며 업데이트 된 모델은 더 많은 경험을 만드는 데 사용됩니다.

AWS DeepRacer를 통해 우리는 스스로 운전할 차량을 훈련하고 있습니다. 훈련 과정을 시각화하는 것은 까다로울 수 있으므로 간단한 예를 살펴 보겠습니다.

> 강화 훈련은 에이전트의 반복적인 과정 입니다. 반복적인 경험으로 모델을 훈련하고, 업데이트된 모델로 다시 반복 훈련을 합니다.

### 단순화 된 환경

이 예에서는 차량이 출발점에서 최단 경로를 따라 결승선까지 이동하기를 원합니다.

환경을 정사각형 격자로 단순화했습니다. 각 사각형은 개별 상태를 나타내며 차량이 목표 방향을 향한 상태에서 위아래로 움직일 수 있습니다.

> 여기에서 차량은 최단 시간으로 결승선 까지 가기를 원합니다. 그래서 환경을 단순화 하기위해 격자모양으로 만들었습니다.

### 점수

그리드의 각 사각형에 점수를 할당하여 인센티브를 제공 할 행동을 결정할 수 있습니다.

여기서 우리는 트랙 가장자리에있는 사각형을 "정지 상태"로 지정하여 차량이 트랙에서 이탈하여 실패했음을 알립니다.

우리는 차량이 트랙 중앙을 주행하는 방법을 배우도록 장려하기 때문에 중앙선에있는 사각형에 대해 높은 보상을 제공하고 다른 곳에서는 낮은 보상을 제공합니다.

> 각각의 격자에 점수를 부여하고, 차량이 통과하면 점수를 얻도록 했습니다. 가운데로 쭉 달리면 가장 높은 점수를 얻게 되겠죠?

### 에피소드

강화 훈련에서 차량은 경계를 벗어나거나 목적지에 도달 할 때까지 그리드를 탐색하여 시작합니다.

주행 할 때 차량은 우리가 정의한 점수로부터 보상을 축적합니다. 이 과정을 에피소드라고합니다.

이 에피소드에서 차량은 정지 상태에 도달하기 전에 2.2의 총 보상을 축적합니다.

> 에피소드는 차량이 출발해서 결승선을 통과하거나 트랙 밖으로 나가는 하나의 시도를 말합니다. 여기에서는 2.2점을 얻었습니다.

### 반복

강화 학습 알고리즘은 누적 보상을 반복적으로 최적화하여 훈련됩니다.

모델은 어떤 행동 (그리고 후속 행동)이 목표에 도달하는 동안 가장 높은 누적 보상을 가져올 것인지 학습합니다.

학습은 처음에만 일어나는 것이 아닙니다. 약간의 반복이 필요합니다. 먼저 에이전트는 지식을 활용하기 전에 가장 높은 보상을받을 수있는 곳을 탐색하고 확인해야합니다.

> 아제 이 에피소드를 계속 반복 합니다. 보상 함수를 잘못 짜면 빙글빙글 돌수도 있습니다. 그게 제일 보상을 많이 받으니까요.

### 탐사

에이전트가 점점 더 많은 경험을 얻을수록 더 높은 보상을 얻기 위해 중앙의 사각형에 머무르는 법을 배웁니다.

각 에피소드의 총 보상을 플로팅하면 시간이 지남에 따라 모델이 어떻게 작동하고 개선되는지 확인할 수 있습니다.

> 점점 중앙을 지날 수록 점수를 많이 받는다는걸 알게 됩니다.

### 탐색 및 수렴

경험이 많을수록 에이전트가 좋아지고 결국 목적지에 안정적으로 도달 할 수 있습니다.

탐사-탐색 전략에 따라 차량은 환경을 탐색하기 위해 무작위 행동을 취할 가능성이 적을 수 있습니다.

> 또다시 반복 하면, 처음에는 랜덤하게 움직였지만, 점점 가운데로만 가게 됩니다.
