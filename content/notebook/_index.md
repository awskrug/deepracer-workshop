---
archetype: "chapter"
title: "주피터 노드북 설정"
weight: 5
---

## SageMaker

AWS Console에서 SageMaker 서비스로 이동합니다.

리전은 `us-east-1`를 선택합니다.

## Notebook instance

좌측 메뉴에서 `노트북 인스턴스`를 선택합니다.

{{% notice tip %}}
바로가기: [Amazon SageMaker > Notebook instances (us-east-1)](https://us-east-1.console.aws.amazon.com/sagemaker/home?region=us-east-1#/notebook-instances)
{{% /notice %}}

우측 상단의 `Create notebook instance` 버튼을 클릭합니다.

`Notebook instance settings` 섹션에서 `Notebook instance name` 에 `deepracer-workshop` 을 입력합니다.

![](./images/notebook-01.png)

`Permissions and encryption` 섹션에서 `IAM role` 을 `Create a new role` 로 선택합니다.

`Create role` 버튼을 클릭합니다.

![](./images/notebook-02.png)

`Git repositories- optional` 섹션을 열고 `Clone a public Git repository...` 를 선택합니다.

`Git repository URL` 에 `https://github.com/awskrug/deepracer-notebook` 을 입력합니다.

![](./images/notebook-03.png)

`Create notebook instance` 버튼을 클릭합니다.

{{% notice tip %}}
노트북 인스턴스 생성에는 5분 정도 소요됩니다.
{{% /notice %}}

## Open Jupyter

만들어진 노트북 인스턴스에서 `Open Jupyter` 링크를 클릭합니다.

![](./images/notebook-04.png)

주피터 노트북이 열리면 `deepracer-notebook` 폴더를 클릭합니다.

![](./images/notebook-05.png)
