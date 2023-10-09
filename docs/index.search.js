var relearn_search_index=[{breadcrumb:"Home",content:`Discover what this Hugo theme is all about and the core-concepts behind it.
`,description:"",tags:null,title:"딥레이서 기초",uri:"/deepracer-workshop/basics/index.html"},{breadcrumb:"Home",content:`Lorem Ipsum.
`,description:"",tags:null,title:"실습 환경 구성",uri:"/deepracer-workshop/workspace/index.html"},{breadcrumb:"Home",content:` 도움말 이 장에서는 30분 훈련 완성을 위한 방법을 설명합니다. 자료는 이 링크를 참고하였습니다.
위의 문서를 참고하여 30분 훈련 완성을 위한 방법을 설명합니다.
작성자는 차량의 조향 방향을 사용하여 스코어링 함수를 설계했습니다.
차량 주위에 고정된 반경의 원을 그린다. 이 원과 중앙선의 교점을 찾는다. 그 점을 향해 조향하면 최대 점수를 얻고, 조향이 다를수록 점수가 감소한다. AWS Console 의 Deepracer 서비스로 이동합니다. Your models 메뉴에서 Create model 을 클릭합니다.
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
`,description:"",tags:null,title:"30분 훈련 완성",uri:"/deepracer-workshop/30-min/index.html"},{breadcrumb:"Home",content:`AWS Console 의 Deepracer 서비스로 이동합니다. Community races 메뉴에서 Create race 를 클릭하여 새 레이스를 만들수 있지만. 우리는 이미 만들어진 레이스로 이동 합니다.
다음 링크 를 클릭하여 레이스로 이동합니다.
Enter race 버튼을 클릭합니다.
Choose model 에서 ch-ccw-00 을 선택합니다.
Enter race 버튼을 클릭합니다.
`,description:"",tags:null,title:"온라인 리그 제출",uri:"/deepracer-workshop/submit/index.html"},{breadcrumb:"Home",content:`AWS Console에서 SageMaker 서비스로 이동합니다.
리전은 ap-northeast-2를 선택합니다.
좌측 메뉴에서 노트북 인스턴스를 선택합니다.
도움말 바로가기: 링크
우측 상단의 Create notebook instance 버튼을 클릭합니다.
Notebook instance settings 섹션에서 Notebook instance name 에 deepracer-workshop 을 입력합니다.
Permissions and encryption 섹션에서 IAM role 을 Create a new role 로 선택합니다.
Create role 버튼을 클릭합니다.
Git repositories- optional 섹션을 열고 Clone a public Git repository... 를 선택합니다.
Git repository URL 에 https://github.com/awskrug/deepracer-group 을 입력합니다.
Create notebook instance 버튼을 클릭합니다.
도움말 노트북 인스턴스 생성에는 5분 정도 소요됩니다.
만들어진 노트북 인스턴스에서 Open Jupyter 링크를 클릭합니다.
주피터 노트북이 열리면 notebook 폴더를 클릭합니다.
`,description:"",tags:null,title:"주피터 노드북 설정",uri:"/deepracer-workshop/notebook/index.html"},{breadcrumb:"Home",content:`주피터 노트북에서 RaceLine_Calculation.ipynb 노트북을 클릭합니다.
처음에는 Kernel이 설정되어있지 않은데 coda_python3 를 선택하고 Set Kernel 버튼을 클릭합니다.
또한 처음에는 Not Trusted 상태인데 버튼을 클릭하고, Trust 를 클릭합니다.
처음에는 사용하는 라이브러리가 설치되어있지 않습니다. 첫 셀의 주석을 풀고 ▶️ Run 을 실행합니다.
해당 셀의 왼쪽에 In [*] 가 In [1] 로 바뀌면 실행이 완료된 것입니다. 다시 주석 처리합니다.
아래 셀에서 TRACK_NAME 이 reInvent2019_track_ccw 인지 확인 합니다.
XI_ITERATIONS = 5 이고, LINE_ITERATIONS = 500 입니다. 이 값은 적절하게 조정할 수 있습니다.
⏩ 버튼을 클릭하면 전체 셀이 실행됩니다.
지정한 iteration 만큼의 시뮬레이션을 실행하고, 최적의 코스를 추출합니다.
추출한 데이터는 deepracer-group/notebook/outputs/racelines/ 폴더에 저장됩니다.
`,description:"",tags:null,title:"최적 코스 추출",uri:"/deepracer-workshop/calculation/index.html"},{breadcrumb:"Home",content:`주피터 노트북에서 RaceLine_ActionSpace.ipynb 노트북을 클릭합니다.
Kernel은 coda_python3 를 선택하고, 노트북을 Trust 합니다.
아래 셀에서 TRACK_NAME 이 reInvent2019_track_ccw-5-500 인지 확인 합니다.
이전에 선택했던 설정 TRACK_NAME, XI_ITERATIONS, LINE_ITERATIONS 을 조합한 이름입니다.
LOOK_AHEAD_POINTS 는 얼마나 멀리 앞을 볼 것인지를 결정합니다.
MIN_SPEED, MAX_SPEED 는 최소, 최대 속도를 결정합니다.
MIN_SPEED, R_STEERING 은 좌우 최대 핸들 각도입니다.
ACTION_SPACE_SIZE 는 스피드와 핸들 각도를 몇 개로 나눌 것인지를 결정합니다.
⏩ 버튼을 클릭하면 전체 셀이 실행됩니다.
추출한 데이터는 deepracer-group/notebook/outputs/ 폴더에 저장됩니다.
`,description:"",tags:null,title:"최적 속도 추출",uri:"/deepracer-workshop/actionspace/index.html"},{breadcrumb:"Home",content:` 도움말 이 보상함수는 링크 를 참고 하였습니다.
주피터 노트북에서 deepracer-group/functions/ct.py 파일을 클릭합니다.
파이선 파일 266번째 줄에 있는 racing_track 변수를 deepracer-group/notebook/outputs/reInvent2019_track_ccw-5-500.py 의 내용으로 수정합니다.
STANDARD_TIME 은 일반으로 완주 했을때의 시간입니다.
FASTEST_TIME 은 최고 기록을 세운 시간입니다.
이제 이 함수로 훈련을 시작해 보겠습니다.
AWS Console 의 Deepracer 서비스로 이동합니다. Your models 메뉴에서 Create model 을 클릭합니다.
Model name 을 입력 합니다. 저는 ch-ccw-01 으로 입력했습니다.
Track 은 Smile Speedway 를 선택합니다.
Track direction 은 Counterclockwise 를 선택합니다.
Next 를 클릭합니다.
Hyperparameters 의 Discount factor 에 0.95 를 입력합니다.
Next 를 클릭합니다.
Select action space 에서 Discrete action space 을 선택합니다.
Define discrete action space 에서 Steering angle granularity = 7, Speed granularity = 3 으로 설정합니다.
Action list 에서 Advanced configuration 을 선택합니다.
Add an action 을 클릭하여 9개의 액션을 추가합니다. 총 30개의 액션이 되어야 합니다.
`,description:"",tags:null,title:"최적화 보상 함수",uri:"/deepracer-workshop/reward_function/index.html"},{breadcrumb:"Home",content:`Lorem Ipsum.
`,description:"",tags:null,title:"주행 로그 분석",uri:"/deepracer-workshop/analysis/index.html"},{breadcrumb:"Home",content:`Lorem Ipsum.
`,description:"",tags:null,title:"보상 함수 튜닝",uri:"/deepracer-workshop/tuning/index.html"},{breadcrumb:"Home",content:"",description:"",tags:null,title:"카테고리",uri:"/deepracer-workshop/categories/index.html"},{breadcrumb:"Home",content:"Contributors Tools Hugo Hugo Relearn Theme ",description:"",tags:null,title:"Credits",uri:"/deepracer-workshop/credits/index.html"},{breadcrumb:"",content:`DeepRacer Workshop 도움말 본 실습에서는 딥레이서 기초부터 최적화 보상 함수, 최적 코스 추출, 최적 속도 추출, 주행 로그 분석 등을 실습합니다.
Topics 딥레이서 기초 실습 환경 구성 30분 훈련 완성 온라인 리그 제출 주피터 노드북 설정 최적 코스 추출 최적 속도 추출 최적화 보상 함수 주행 로그 분석 보상 함수 튜닝 Credits `,description:"",tags:null,title:"Home",uri:"/deepracer-workshop/index.html"},{breadcrumb:"Home",content:"",description:"",tags:null,title:"태그",uri:"/deepracer-workshop/tags/index.html"}]