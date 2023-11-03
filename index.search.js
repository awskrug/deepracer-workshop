var relearn_search_index=[{breadcrumb:"Home",content:`What is AWS Deepracer DeepRacer 소개 홈페이지 : https://aws.amazon.com/deepracer
DeepRacer는 강화학습 기계학습 알고리즘으로 훈련되어 작동하는 1/18 비율의 자율주행 자동차를 경험할 수 있는 서비스입니다.
도움말 강화학습 (Reinforcement Learning, RL)은 인공지능 기계학습 분야 중 하나로 보상(Reward)을 통해 기계를 학습시키는 독특한 방식의 알고리즘입니다. 강화학습의 대표적인 예로 알파고와 GPT 등이 있습니다.
DeepRacer에서 제공하는 서비스로 크게 시뮬레이터, 자동차, 리그로 나누어 볼 수 있습니다.
시뮬레이터 : 딥레이서 모델을 훈련시키기 위해서는 가상의 시뮬레이션 공간이 필요합니다. 이러한 시뮬레이션 공간을 손쉽게 구성할 수 있습니다.
자동차 : 1/18 비율의 실제 자동차를 구매하여 훈련된 모델을 테스트해 볼 수 있습니다.
리그 : 딥레이서에서는 매월 온라인 리그(Virtual Circuit)가 개최되며, 여기서 우수한 성적을 얻은 참가자는 Re:invent 챔피언십 리그에 참가할 자격이 주어집니다.
Deepracer Workflow DeepRaecr로 자율주행 자동차를 만드는 과정은 다음과 같습니다.
먼저, 시뮬레이션 공간에서 강화학습 알고리즘으로 모델을 훈련시킵니다. 시뮬레이션 공간에서 모델을 훈련시키는 이유는 모델 훈련의 효율성을 높이고 실제 세상의 위험 요소들을 회피하기 위함입니다.
이렇게 훈련된 모델을 실제 차량에 업로드하여 자율주행 자동차가 완성됩니다.
도움말 “Sim2real"은 “simulation to real-world"의 줄임말로, 인공 지능이나 로봇 공학 등에서 사용되는 용어로, 인공적으로 만들어진 시뮬레이션 환경에서 훈련된 모델이 실제 세계에서 잘 작동하는지 확인하기 위한 프로세스를 뜻합니다. 시뮬레이션 환경과 실제 세계는 매우 다르기 때문에, 시뮬레이션에서 잘 동작하는 모델이 실제 세계에서도 잘 작동하는지 보장할 수는 없습니다.
Reinforcement Learning DeepRacer 모델을 훈련시키는 알고리즘인 강화학습(Reinforcement Learning, RL)에 대해 알아보겠습니다. 우선, 인공지능 및 기계학습의 종류에대해 간략히 알아보겠습니다.
인공지능 알고리즘은 크게 규칙기반(Rule-based)과 기계학습(Machine Learning, ML) 분야로 나뉘어집니다. 규칙기반은 규칙과 패턴을 사람의 경험 등에 의해 입력된 형태를 의미하고, 기계학습은 규칙과 패턴을 데이터를 통해 학습하는 형태를 의미합니다.
기계학습(Machine Learning, ML)은 크게 지도학습(Supervised Leaning, SL), 강화학습(Reinforcement Learning, RL), 비지도학습(Unsupervised Learning, UL) 로 나뉘어 집니다.
지도학습 (Supervised Leaning, SL) 기계에게 사람이 직접 정답을 알려주는 형태의 알고리즘으로 가장 많이 활용되는 기계학습 분야입니다. 일반적으로 잘 학습되지만 라벨링(사람이 정답을 매기는 과정) 과정이 다소 번거롭습니다. 강화학습 (Reinforcement Learning, RL) 보상을 통해 기계의 행동을 학습시키는 알고리즘입니다. 예를들어, 기계가 잘 하면 높은 점수(보상)를 주고 잘 못하면 낮은 점수(처벌)를 주면서 기계를 학습시킵니다. 라벨링이 필요없다는 장점을 가지지만 지도학습만큼 잘 학습이 되지 않습니다. 비지도학습 (Unsupervised Learning, UL) 데이터 자체의 특징과 패턴을 분석하는 분야입니다. 지도학습과 강화학습은 input에 따른 output을 학습시키는 것이 중점이라면 비지도학습은 데이터 내부적 패턴을 찾는 것이 주요 관심사입니다. 이후 섹션인 최적 코스 추출 및 최적 속도 추출 과정이 비지도학습에 해당됩니다. 지도학습 (Supervised Learning)은 마치 부모가 직접 수학을 공부하여 자녀에게 정답을 알려주는 방식과 유사합니다.
반면에 강화학습 (Reinforcement Learning)은 부모가 수학을 몰라도 용돈(보상)을 통해 자녀에게 수학을 학습시키는 방식과 유사합니다.
딥레이서 모델은 센서 데이터 (예를들면, 카메라에 찍힌 사진)를 입력 받아서 속도와 핸들 각도를 출력하는 구조로 되어있습니다.
일반적으로 입력값을 S (State)라고 표현하고 출력값을 A (Action)이라고 표현합니다.
딥레이서 모델이 여러분의 마음에 드는 Action (속도 및 핸들 각도)을 출력한다면 높은 보상을 주고 마음에 들지 않는 다면 낮은 보상을 주면 됩니다.
모델은 학습을 통해 높은 보상이 나오는 쪽으로 Action을 강화합니다. 반면 낮은 보상이 나오는 Action은 학습을 통해 점차 약화됩니다.
도움말 강화학습에서 기계에게 보상을 줄 때 사람이 매번 하나하나 주는 것은 매우 번거로운 일입니다. 따라서 보상 함수(Reward Function)를 작성하여 보상을 주는 원칙을 정하고 이를 자동화하는 방식을 사용합니다.
도움말 DeepRacer는 초당 15프레임의 촬영을 합니다. 즉, 1초에 15번씩 카메라에 찍힌 사진(S)을 모델에 입력하여 속도 및 핸들 각도 (A)를 출력하며 각각의 행동에 대해 매번 보상함수를 통해 보상을 얼마나 줄 지를 결정합니다.
Types of sensors and vehicles DeepRacer에서 사용되는 센서의 종류는 카메라(Camera)와 2D 라이다(LiDAR)입니다. 카메라는 최대 2개까지 장착 가능하며, 2D 라이다로 최대 1개 장착할 수 있습니다.
딥레이서 실제 차량을 구매할 때, 센서의 수와 종류에 따라 금액이 달라집니다. 기본 차량의 경우 카메라 1개만 포함되어 있으며, 추가적으로 센서킷을 구매하면 카메라 2개와 라이다 1개로 EVO 차량을 만들 수 있습니다.
센서의 종류에 따라 위와 같이 차량의 타입을 4가지로 구분할 수 있습니다.
일반적으로 전방의 장애물을 감지하기 위해서 카메라 2대를 사용합니다. (원근감을 위해서)
또한 후방에서 다가오는 차량을 감지하기 위해서 라이다를 활용합니다.
참고로 시뮬레이션에서 훈련된 모델의 차량의 타입(센서의 개수 및 종류)이 실제 차량에서의 타입과 동일해야만 실제 차량에서 정상적으로 모델을 작동시킬 수 있습니다.
도움말 “처리할 데이터의 양"과 “학습 속도"는 서로 Trade-off 관계입니다. 즉, 어느 한쪽이 이득을 얻으면 다른 한쪽은 손해를 봐야합니다. 센서의 수가 많아지면, 처리할 데이터량이 많아지고 학습 속도는 급격히 저하됩니다.반대로 센서의 수가 적으면, 처리할 데이터량이 적어지고 학습 속도는 급격히 올라갑니다.
AWS DeepRacer Console 딥레이서 콘솔 : https://us-east-1.console.aws.amazon.com/deepracer/home
위의 딥레이서 콘솔 링크를 통해 딥레이서 모델을 훈련시키고 관리할 수 있습니다.
좌측 메뉴 중에서 가장 중요한 섹션인 Racing League와 Reinforcement Learning에 대해서 중점적으로 알아보겠습니다.
Racing League 섹션
AWS Virtual Circuit : 전 세계 사람들과 함께 경쟁하는 리그 공간 Community races : 지인 및 친구들과 함께 경쟁하는 공간 Your racer profile : 자신의 레이싱 프로필을 관리 Reinforcement Learning 섹션
Get started : 모델 훈련을 시작하는 공간 Your models : 훈련된 모델을 관리하는 공간 Your garage : 차량을 생성 및 관리하는 공간 도움말 본 섹션 (딥레이서 기초)은 DeepRacer School의 일부 내용을 저작권자의 허락에 따라 참조하여 제작되었습니다.
`,description:"",tags:null,title:"딥레이서 기초",uri:"/deepracer-workshop/basics/index.html"},{breadcrumb:"Home",content:` 도움말 실습 환경을 구성 하기위해 AWS Workshop Studio 를 사용합니다.
Create Account 실습 환경 구성을 위해 제공해 드린 링크에 접속하시면 AWS Workshop Studio - Sign in 화면이 나타납니다.
Email one-time Password (OTP) 를 클릭하시면 일회용 이메일 암호 화면이 나타납니다.
본인의 이메일을 입력하시고 암호 전송 을 클릭하시면 일회용 이메일 암호 입력 화면이 나타납니다.
메일함을 확인하여 9자리 숫자로 된 암호 를 복사하여 입력란에 붙여넣기 하시고 로그인 을 클릭하시면 이용 약관에 동의 화면이 나타납니다.
이용 약관에 동의를 위해, I agree with the Term and Conditions 에 체크하시고 Join event 를 클릭하시면 AWSKRUG Hands-on - DeepRacer Workshop 화면이 나타납니다.
우측 메뉴에서 Open AWS console (us-east-1) 을 클릭하시면 AWS Console 화면이 나타납니다.
AWS Console 에 참가자 계정으로 들어왔습니다. 이 계정은 대략 1일 정도만 유지되며, 이후에는 삭제됩니다.
상단 검색창에 deepracer 를 입력하시면 AWS DeepRacer 가 나타납니다.
`,description:"",tags:null,title:"실습 환경 구성",uri:"/deepracer-workshop/workshop_studio/index.html"},{breadcrumb:"Home",content:` 도움말 이 장에서는 30분 훈련 완성을 위한 방법을 설명합니다. 자료는 이 링크를 참고하였습니다.
AWS Deepracer — How to train a model in 15 minutes 작성자는 차량의 조향 방향을 사용하여 스코어링 함수를 설계했습니다.
차량 주위에 트랙 너비 만큼의 원을 그린다. 이 원과 중앙선의 교점을 찾는다. 그 점을 향해 조향하면 최대 점수를 얻고, 조향이 다를수록 점수가 감소한다. Discount factor 는 0.5 를 사용한다. 이렇게 훈련한 모델은 15분 훈련으로 주행률 100% 를 달성할 수 있었습니다. 주 위의 문서에서는 15분 훈련을 했지만, 우리는 Discount factor 를 0.9 로 변경 하였기에 30분 훈련으로 진행 합니다.
Create model AWS Console 의 Deepracer 서비스로 이동합니다. Your models 메뉴에서 Create model 을 클릭합니다.
Model name 을 입력 합니다. 저는 ch-ccw-00 으로 입력했습니다.
Track 은 Smile Speedway 를 선택합니다.
Track direction 은 Counterclockwise 를 선택합니다.
Next 를 클릭합니다.
Hyperparameters 의 Discount factor 에 0.9 를 입력합니다.
Next 를 클릭합니다.
Select action space 에서 Discrete action space 을 선택합니다.
Steering angle granularity 에 7 을 선택합니다.
Speed granularity 에 1 을 선택합니다.
Maximum speed 에 1.4 를 입력합니다.
Action list 는 총 7개의 액션이 되어야 합니다.
Next 를 클릭합니다.
차량은 The Original DeepRacer 를 선택합니다.
Next 를 클릭합니다.
Reward function 에 다음의 코드를 입력합니다.
import math SIGHT = 0.9 MAX_REWARD = 3.0 MIN_REWARD = 0.0001 def dist(point1, point2): return ((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2) ** 0.5 # thanks to https://stackoverflow.com/questions/20924085/python-conversion-between-coordinates def rect(r, theta): """ theta in degrees returns tuple; (float, float); (x,y) """ x = r * math.cos(math.radians(theta)) y = r * math.sin(math.radians(theta)) return x, y # thanks to https://stackoverflow.com/questions/20924085/python-conversion-between-coordinates def polar(x, y): """ returns r, theta(degrees) """ r = (x ** 2 + y ** 2) ** 0.5 theta = math.degrees(math.atan2(y, x)) return r, theta def angle_mod_360(angle): """ Maps an angle to the interval -180, +180. Examples: angle_mod_360(362) == 2 angle_mod_360(270) == -90 :param angle: angle in degree :return: angle in degree. Between -180 and +180 """ n = math.floor(angle / 360.0) angle_between_0_and_360 = angle - n * 360.0 if angle_between_0_and_360 <= 180.0: return angle_between_0_and_360 else: return angle_between_0_and_360 - 360 def get_waypoints_ordered_in_driving_direction(params): # return get_center_waypoints() # waypoints are always provided in counter clock wise order if params["is_reversed"]: # driving clock wise. return list(reversed(params["waypoints"])) else: # driving counter clock wise. return params["waypoints"] def up_sample(waypoints, factor=10): """ Adds extra waypoints in between provided waypoints :param waypoints: :param factor: integer. E.g. 3 means that the resulting list has 3 times as many points. :return: """ p = waypoints n = len(p) return [ [ i / factor * p[int((j + 1) % n)][0] + (1 - i / factor) * p[j][0], i / factor * p[int((j + 1) % n)][1] + (1 - i / factor) * p[j][1], ] for j in range(n) for i in range(factor) ] def get_target_point(params): waypoints = up_sample(get_waypoints_ordered_in_driving_direction(params), 20) car = [params["x"], params["y"]] distances = [dist(p, car) for p in waypoints] min_dist = min(distances) i_closest = distances.index(min_dist) n = len(waypoints) waypoints_starting_with_closest = [waypoints[(i + i_closest) % n] for i in range(n)] r = params["track_width"] * SIGHT is_inside = [dist(p, car) < r for p in waypoints_starting_with_closest] i_first_outside = is_inside.index(False) if i_first_outside < 0: # this can only happen if we choose r as big as the entire track return waypoints[i_closest] return waypoints_starting_with_closest[i_first_outside] def get_target_steering_degree(params): tx, ty = get_target_point(params) car_x = params["x"] car_y = params["y"] dx = tx - car_x dy = ty - car_y heading = params["heading"] _, target_angle = polar(dx, dy) steering_angle = target_angle - heading return angle_mod_360(steering_angle) def score_speed(params): speed = params["speed"] max_speed = 2.5 score = speed / max_speed return max(min(score, MAX_REWARD), MIN_REWARD) def score_steer_to_point_ahead(params): best_stearing_angle = get_target_steering_degree(params) steering_angle = params["steering_angle"] speed = params["speed"] error = ( steering_angle - best_stearing_angle ) / 60.0 # 60 degree is already really bad score = 1.0 - abs(error) return max(min(score, MAX_REWARD), MIN_REWARD) def reward_function(params): reward = 0.0 reward += score_steer_to_point_ahead(params) # reward += score_speed(params) return float(reward)함수가 잘 작성되었는지 확인하기 위해 Validate 를 클릭합니다.
Stop conditions 의 Maximum time 에 30 을 입력합니다.
다음 설정들은 모두 체크를 해제 합니다.
Create model 을 클릭합니다.
초기화가 완료 되면 훈련을 시작 할 것 입니다.
도움말 훈련이 진행 되는 동안 보상 함수를 분석해 봅시다.
Trainning 훈련이 진행되는 동안 Reward graph 와 Simulation video stream 을 확인 할 수 있습니다.
이미 15분 경 평가 100% 를 달성했고, 30분 훈련을 완료하였습니다.
Evaluation Evaluation 탭으로 이동합니다.
Start evaluation 을 클릭합니다.
Evaluation Name 을 입력합니다. 저는 ccw-01 으로 입력했습니다.
Evaluate criteria 에서 트랙은 Smile Speedway 를 선택합니다.
Track direction 은 Counterclockwise 를 선택합니다.
Start evaluation 을 클릭합니다.
평가가 진행되는 동안 Simulation video stream 와 Evaluation results 을 확인 할 수 있습니다.
평가가 완료 되었습니다. Simulation video stream 에서 주행 영상을 확인 할 수 있습니다.
`,description:"",tags:null,title:"30분 훈련 완성",uri:"/deepracer-workshop/30-min/index.html"},{breadcrumb:"Home",content:`Online league AWS Console 의 Deepracer 서비스로 이동합니다. Community races 메뉴에서 Create race 를 클릭하여 새 레이스를 만들수 있지만. 우리는 이미 만들어진 레이스로 이동 합니다.
도움말 바로가기: AWS DeepRacer > Community races > ch-demo-2023
Submit model Enter race 버튼을 클릭합니다.
Choose model 에서 ch-ccw-00 을 선택합니다.
Enter race 버튼을 클릭합니다.
평가가 끝나면 결과가 표시됩니다.
`,description:"",tags:null,title:"온라인 리그 제출",uri:"/deepracer-workshop/submit/index.html"},{breadcrumb:"Home",content:`SageMaker AWS Console에서 SageMaker 서비스로 이동합니다.
리전은 us-east-1를 선택합니다.
Notebook instance 좌측 메뉴에서 노트북 인스턴스를 선택합니다.
도움말 바로가기: Amazon SageMaker > Notebook instances (us-east-1)
우측 상단의 Create notebook instance 버튼을 클릭합니다.
Notebook instance settings 섹션에서 Notebook instance name 에 deepracer-workshop 을 입력합니다.
Permissions and encryption 섹션에서 IAM role 을 Create a new role 로 선택합니다.
Create role 버튼을 클릭합니다.
Git repositories- optional 섹션을 열고 Clone a public Git repository... 를 선택합니다.
Git repository URL 에 https://github.com/awskrug/deepracer-notebook 을 입력합니다.
Create notebook instance 버튼을 클릭합니다.
도움말 노트북 인스턴스 생성에는 5분 정도 소요됩니다.
Open Jupyter 만들어진 노트북 인스턴스에서 Open Jupyter 링크를 클릭합니다.
주피터 노트북이 열리면 deepracer-notebook 폴더를 클릭합니다.
`,description:"",tags:null,title:"주피터 노드북 설정",uri:"/deepracer-workshop/notebook/index.html"},{breadcrumb:"Home",content:`RaceLine Calculation 주피터 노트북에서 RaceLine_Calculation.ipynb 노트북을 클릭합니다.
처음에는 Kernel이 설정되어있지 않은데 coda_python3 를 선택하고 Set Kernel 버튼을 클릭합니다.
또한 처음에는 Not Trusted 상태인데 버튼을 클릭하고, Trust 를 클릭합니다.
처음에는 사용하는 라이브러리가 설치되어있지 않습니다. 첫 셀의 주석을 풀고 ▶️ Run 을 실행합니다.
해당 셀의 왼쪽에 In [*] 가 In [1] 로 바뀌면 실행이 완료된 것입니다. 다시 주석 처리합니다.
Run all cells 아래 셀에서 TRACK_NAME 이 reInvent2019_track_ccw 인지 확인 합니다.
XI_ITERATIONS = 5 이고, LINE_ITERATIONS = 500 입니다. 이 값은 적절하게 조정할 수 있습니다.
⏩ 버튼을 클릭하면 전체 셀이 실행됩니다.
지정한 iteration 만큼의 시뮬레이션을 실행하고, 최적의 코스를 추출합니다.
추출한 데이터는 deepracer-notebook/outputs/racelines/ 폴더에 저장됩니다.
`,description:"",tags:null,title:"최적 코스 추출",uri:"/deepracer-workshop/calculation/index.html"},{breadcrumb:"Home",content:`RaceLine ActionSpace 주피터 노트북에서 RaceLine_ActionSpace.ipynb 노트북을 클릭합니다.
Kernel은 coda_python3 를 선택하고, 노트북을 Trust 합니다.
Run all cells 아래 셀에서 TRACK_NAME 이 reInvent2019_track_ccw-5-500 인지 확인 합니다.
이전에 선택했던 설정 TRACK_NAME, XI_ITERATIONS, LINE_ITERATIONS 을 조합한 이름입니다.
LOOK_AHEAD_POINTS 는 얼마나 멀리 앞을 볼 것인지를 결정합니다.
MIN_SPEED, MAX_SPEED 는 최소, 최대 속도를 결정합니다.
MIN_SPEED, R_STEERING 은 좌우 최대 핸들 각도입니다.
ACTION_SPACE_SIZE 는 스피드와 핸들 각도를 몇 개로 나눌 것인지를 결정합니다.
⏩ 버튼을 클릭하면 전체 셀이 실행됩니다.
추출한 데이터는 deepracer-notebook/outputs/ 폴더에 저장됩니다.
`,description:"",tags:null,title:"최적 속도 추출",uri:"/deepracer-workshop/actionspace/index.html"},{breadcrumb:"Home",content:` 도움말 이 보상함수는 링크 를 참고 하였습니다.
Capstone_AWS_DeepRacer 주피터 노트북에서 deepracer-notebook/functions/ct.py 파일을 클릭합니다.
파이선 파일 266번째 줄에 있는 racing_track 변수를 deepracer-notebook/outputs/reInvent2019_track_ccw-5-500.py 의 내용으로 수정합니다.
STANDARD_TIME 은 일반으로 완주 했을때의 시간입니다.
FASTEST_TIME 은 최고 기록을 세운 시간입니다.
이제 이 함수로 훈련을 시작해 보겠습니다.
Create model AWS Console 의 Deepracer 서비스로 이동합니다. Your models 메뉴에서 Create model 을 클릭합니다.
Model name 을 입력 합니다. 저는 ch-ccw-01 으로 입력했습니다.
Track 은 Smile Speedway 를 선택합니다.
Track direction 은 Counterclockwise 를 선택합니다.
Next 를 클릭합니다.
Hyperparameters 의 Discount factor 에 0.95 를 입력합니다.
Next 를 클릭합니다.
Select action space 에서 Discrete action space 을 선택합니다.
Define discrete action space 에서 다음을 설정 합니다.
Steering angle granularity = 7
Speed granularity = 3
Action list 에서 Advanced configuration 을 선택합니다.
Add an action 을 클릭하여 9개의 액션을 추가합니다. 총 30개의 액션이 되어야 합니다.
이제 Steering angle 과 Speed 에 다음과 같은 값을 입력합니다.
[ { "steering_angle": -30.0, "speed": 1.1, "index": 0 }, { "steering_angle": -24.0, "speed": 1.1, "index": 1 }, { "steering_angle": -24.0, "speed": 1.8, "index": 2 }, { "steering_angle": -24.0, "speed": 2.5, "index": 3 }, { "steering_angle": -16.0, "speed": 1.1, "index": 4 }, { "steering_angle": -16.0, "speed": 1.8, "index": 5 }, { "steering_angle": -16.0, "speed": 2.5, "index": 6 }, { "steering_angle": -16.0, "speed": 3.2, "index": 7 }, { "steering_angle": -8.0, "speed": 1.1, "index": 8 }, { "steering_angle": -8.0, "speed": 1.8, "index": 9 }, { "steering_angle": -8.0, "speed": 2.5, "index": 10 }, { "steering_angle": -8.0, "speed": 3.2, "index": 11 }, { "steering_angle": -8.0, "speed": 3.9, "index": 12 }, { "steering_angle": 0.0, "speed": 3.9, "index": 13 }, { "steering_angle": 0.0, "speed": 3.2, "index": 14 }, { "steering_angle": 0.0, "speed": 2.5, "index": 15 }, { "steering_angle": 0.0, "speed": 1.8, "index": 16 }, { "steering_angle": 8.0, "speed": 3.9, "index": 17 }, { "steering_angle": 8.0, "speed": 3.2, "index": 18 }, { "steering_angle": 8.0, "speed": 2.5, "index": 19 }, { "steering_angle": 8.0, "speed": 1.8, "index": 20 }, { "steering_angle": 8.0, "speed": 1.1, "index": 21 }, { "steering_angle": 16.0, "speed": 3.2, "index": 22 }, { "steering_angle": 16.0, "speed": 2.5, "index": 23 }, { "steering_angle": 16.0, "speed": 1.8, "index": 24 }, { "steering_angle": 16.0, "speed": 1.1, "index": 25 }, { "steering_angle": 24.0, "speed": 2.5, "index": 26 }, { "steering_angle": 24.0, "speed": 1.8, "index": 27 }, { "steering_angle": 24.0, "speed": 1.1, "index": 28 }, { "steering_angle": 30.0, "speed": 1.1, "index": 29 } ]Next 를 클릭합니다.
차량은 The Original DeepRacer 를 선택합니다.
Next 를 클릭합니다.
Reward function 에 처음의 코드를 입력합니다.
함수가 잘 작성되었는지 확인하기 위해 Validate 를 클릭합니다.
Stop conditions 의 Maximum time 에 200 을 입력합니다.
다음 설정들은 모두 체크를 해제 합니다.
Create model 을 클릭합니다.
초기화가 완료 되면 훈련을 시작 할 것 입니다.
Trainning 200분 훈련을 완료하였습니다. 아마도 다음과 같은 그래프가 나올 것 입니다.
`,description:"",tags:null,title:"최적화 보상 함수",uri:"/deepracer-workshop/reward_function/index.html"},{breadcrumb:"Home",content:`Download logs 분석 하고자 하는 모델 에서 Download logs 를 클릭하여 주행 로그를 다운로드 합니다.
Analysis ActionSpace 주피터 노트북에서 Analysis_ActionSpace.ipynb 노트북을 클릭합니다.
Kernel은 coda_python3 를 선택하고, 노트북을 Trust 합니다.
처음에는 사용하는 라이브러리가 설치되어있지 않습니다. 첫 셀의 주석을 풀고 ▶️ Run 을 실행합니다.
Run all cells 아래 셀에서 track_name = reInvent2019_track_ccw 를 확인 합니다.
fname = logs/training-robomaker.log 를 확인 합니다.
⏩ 버튼을 클릭하면 전체 셀이 실행됩니다.
`,description:"",tags:null,title:"주행 로그 분석",uri:"/deepracer-workshop/analysis/index.html"},{breadcrumb:"Home",content:` 도움말 이 장에서는 Best lap time 이 07.611 인 모델을 기준으로 설명합니다.
ch-ccw-06 주피터 노트북에서 RaceLine_ActionSpace.ipynb 노트북을 클릭합니다.
MIN_SPEED = 1.1, MAX_SPEED = 3.6 을 입력합니다.
결과를 racing_track 변수에 저장합니다.
AWS Console 의 Deepracer 서비스로 이동합니다. Your models 메뉴에서 Create model 을 클릭합니다.
이전과 같은 방법으로 모델을 훈련 합니다.
보상함수: https://github.com/awskrug/deepracer-notebook/blob/main/functions/ch-ccw-06.py
ch-ccw-06-ccw 주피터 노트북에서 RaceLine_ActionSpace.ipynb 노트북을 클릭합니다.
MIN_SPEED = 1.3, MAX_SPEED = 3.9 를 입력합니다.
결과를 racing_track 변수에 저장합니다.
Your models 에서 ch-ccw-06 모델을 선택합니다.
Clone 을 클릭합니다.
Hyperparameter 의 Learning rate	= 0.0002 으로 변경합니다.
모델을 훈련 합니다.
보상함수: https://github.com/awskrug/deepracer-notebook/blob/main/functions/ch-ccw-06-ccw.py
ch-ccw-06-ccw-ccw2 주피터 노트북에서 RaceLine_ActionSpace.ipynb 노트북을 클릭합니다.
MIN_SPEED = 1.6, MAX_SPEED = 4.0 을 입력합니다.
결과를 racing_track 변수에 저장합니다.
Your models 에서 ch-ccw-06-ccw 모델을 선택합니다.
Clone 을 클릭합니다.
Hyperparameter 의 Learning rate	= 0.0001 으로 변경합니다.
모델을 훈련 합니다.
보상함수: https://github.com/awskrug/deepracer-notebook/blob/main/functions/ch-ccw-06-ccw-ccw2.py
ch-ccw-06-ccw-ccw2-ccw 보상함수는 이전 것을 그대로 사용 합니다.
Your models 에서 ch-ccw-06-ccw-ccw2 모델을 선택합니다.
Clone 을 클릭합니다.
Hyperparameter 의 Learning rate	= 0.00005 으로 변경합니다.
모델을 훈련 합니다.
`,description:"",tags:null,title:"보상 함수 튜닝",uri:"/deepracer-workshop/tuning/index.html"},{breadcrumb:"Home",content:`Notebook instance 다시 노트북 인스턴스를 선택합니다.
도움말 바로가기: Amazon SageMaker > Notebook instances (us-east-1)
Open JupyterLab 만들어진 노트북 인스턴스에서 Open JupyterLab 링크를 클릭합니다.
Other > Terminal 링크를 클릭합니다.
Prepare sudo amazon-linux-extras install -y mate-desktop1.x sudo amazon-linux-extras install -y epelsudo yum install -y git jq sudo yum install -y chromium chromedriverdeepracer-submit cd ~ git clone https://github.com/nalbam/deepracer-submit cd deepracer-submit pip3 install --upgrade -r requirements.txtexport ACCOUNT_ID=$(aws sts get-caller-identity | grep "Account" | cut -d'"' -f4) export DR_USERNAME='username' export DR_PASSWORD='password' export MFA_SECRET='' # BASE32_MFA_SECRET export SLACK_TOKEN='xoxb-xxx-xxx-xxx' export SLACK_CHANNEL='sandbox'cat <<EOF > config/deepracer.json { "userno": "\${ACCOUNT_ID}", "username": "\${DR_USERNAME}", "password": "\${DR_PASSWORD}", "mfa": "\${MFA_SECRET}", "slack": { "token": "\${SLACK_TOKEN}", "channel": "\${SLACK_CHANNEL}" }, "races": [ { "name": "comm", "arn": "competition/arn%3Aaws%3Adeepracer%3A%3A968005369378%3Aleaderboard%2Fc2952386-1b8d-4610-ab54-5512e6656d68", "models": [ "ch-ccw-00", "ch-ccw-06", "ch-ccw-06-ccw" ] } ] } EOFsubmit debug ./submit.py -t comm -d Truesubmit ./submit.py -t commcrontab cat <<EOF > config/crontab.sh */15 * * * * /home/ec2-user/deepracer-submit/submit.py -t comm > /tmp/submit.log 2>&1 EOFcrontab config/crontab.shslack `,description:"",tags:null,title:"제출 자동화",uri:"/deepracer-workshop/automation/index.html"},{breadcrumb:"Home",content:"",description:"",tags:null,title:"카테고리",uri:"/deepracer-workshop/categories/index.html"},{breadcrumb:"Home",content:"Contributors Tools Hugo Hugo Relearn Theme ",description:"",tags:null,title:"Credits",uri:"/deepracer-workshop/credits/index.html"},{breadcrumb:"",content:`DeepRacer Workshop 도움말 본 실습에서는 딥레이서 기초부터 최적화 보상 함수, 최적 코스 추출, 최적 속도 추출, 주행 로그 분석 등을 실습합니다.
Topics 딥레이서 기초 실습 환경 구성 30분 훈련 완성 온라인 리그 제출 주피터 노드북 설정 최적 코스 추출 최적 속도 추출 최적화 보상 함수 주행 로그 분석 보상 함수 튜닝 제출 자동화 Credits `,description:"",tags:null,title:"Home",uri:"/deepracer-workshop/index.html"},{breadcrumb:"Home",content:"",description:"",tags:null,title:"태그",uri:"/deepracer-workshop/tags/index.html"}]