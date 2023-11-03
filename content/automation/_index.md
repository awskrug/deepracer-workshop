---
archetype: "chapter"
title: "제출 자동화"
weight: 11
---

## Notebook instance

다시 `노트북 인스턴스`를 선택합니다.

{{% notice tip %}}
바로가기: [Amazon SageMaker > Notebook instances (us-east-1)](https://us-east-1.console.aws.amazon.com/sagemaker/home?region=us-east-1#/notebook-instances)
{{% /notice %}}

## Open JupyterLab

만들어진 노트북 인스턴스에서 `Open JupyterLab` 링크를 클릭합니다.

![](./images/automation-01.png)

`Other` > `Terminal` 링크를 클릭합니다.

![](./images/automation-02.png)

## Prepare

```bash
sudo amazon-linux-extras install -y mate-desktop1.x
sudo amazon-linux-extras install -y epel
```

```bash
sudo yum install -y git jq
sudo yum install -y chromium chromedriver
```

## deepracer-submit

```bash
cd ~

git clone https://github.com/nalbam/deepracer-submit

cd deepracer-submit

pip3 install --upgrade -r requirements.txt
```

```bash
export ACCOUNT_ID=$(aws sts get-caller-identity | grep "Account" | cut -d'"' -f4)

export DR_USERNAME='username'
export DR_PASSWORD='password'
export MFA_SECRET='' # BASE32_MFA_SECRET

export SLACK_TOKEN='xoxb-xxx-xxx-xxx'
export SLACK_CHANNEL='sandbox'
```

```bash
cat <<EOF > config/deepracer.json
{
  "userno": "${ACCOUNT_ID}",
  "username": "${DR_USERNAME}",
  "password": "${DR_PASSWORD}",
  "mfa": "${MFA_SECRET}",
  "slack": {
    "token": "${SLACK_TOKEN}",
    "channel": "${SLACK_CHANNEL}"
  },
  "races": [
    {
      "name": "comm",
      "arn": "competition/arn%3Aaws%3Adeepracer%3A%3A968005369378%3Aleaderboard%2Fc2952386-1b8d-4610-ab54-5512e6656d68",
      "models": [
        "ch-ccw-00", "ch-ccw-06", "ch-ccw-06-ccw"
      ]
    }
  ]
}
EOF
```

## submit

### debug

```bash
./submit.py -t comm -d True
```

## submit

```bash
./submit.py -t comm
```

## crontab

```bash
cat <<EOF > config/crontab.sh
*/15 * * * * /home/ec2-user/deepracer-submit/submit.py -t comm > /tmp/submit.log 2>&1
EOF
```

```bash
crontab config/crontab.sh
```

## slack

![](./images/submit-comm.png)
