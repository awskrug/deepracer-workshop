---
archetype: "chapter"
title: "최적화 보상 함수"
weight: 8
---

{{% notice tip %}}
이 보상함수는 [링크](https://github.com/dgnzlz/Capstone_AWS_DeepRacer) 를 참고 하였습니다.
{{% /notice %}}

주피터 노트북에서 `deepracer-group/functions/ct.py` 파일을 클릭합니다.

![](./images/reward_function-00.png)

파이선 파일 266번째 줄에 있는 `racing_track` 변수를 `deepracer-group/notebook/outputs/reInvent2019_track_ccw-5-500.py` 의 내용으로 수정합니다.

`STANDARD_TIME` 은 일반으로 완주 했을때의 시간입니다.

`FASTEST_TIME` 은 최고 기록을 세운 시간입니다.

이제 이 함수로 훈련을 시작해 보겠습니다.

AWS Console 의 `Deepracer` 서비스로 이동합니다. `Your models` 메뉴에서 `Create model` 을 클릭합니다.

![](./images/reward_function-01.png)

`Model name` 을 입력 합니다. 저는 `ch-ccw-01` 으로 입력했습니다.

![](./images/reward_function-02.png)

`Track` 은 `Smile Speedway` 를 선택합니다.

![](./images/reward_function-03.png)

`Track direction` 은 `Counterclockwise` 를 선택합니다.

![](./images/reward_function-04.png)

`Next` 를 클릭합니다.

`Hyperparameters` 의 `Discount factor` 에 `0.95` 를 입력합니다.

`Next` 를 클릭합니다.

`Select action space` 에서 `Discrete action space` 을 선택합니다.

`Define discrete action space` 에서 `Steering angle granularity` = `7`, `Speed granularity` = `3` 으로 설정합니다.

`Action list` 에서 `Advanced configuration` 을 선택합니다.

`Add an action` 을 클릭하여 9개의 액션을 추가합니다. 총 30개의 액션이 되어야 합니다.
