window.onload = function() {
    test1();
    test2();
    test3();
};

const test1 = () =>{
// function test(){
    // 1번
    var nums = [100, 200, 300, 400, 500];
    nums.pop();
    nums.pop();
    showAnswer(1, nums);

    // 2번
    // <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
    // **데이터**
    var arr = [200, 100, 300];
    // //pass
    let a_2 = arr.splice(2,0,'10000');
    // **출력**
    // [200, 100, 10000, 300]
    showAnswer(2, arr);

    // 3번
    showAnswer(3, '4번');

    // 4번
    showAnswer(4, '2번');

    // 5번
    showAnswer(4, '4번');

    // 7번
    showAnswer(7, 'JavaScript 식별자는 문자, 밑줄(_) 혹은 달러 기호($)로 시작');

    // 9번
    // 데이터
    let year = '2019';
    let month = '04';
    let day = '26';
    let hour = '11';
    let minute = '34';
    let second = '27';

    let result = year.concat('/',month,'/',day,' ',hour,':',minute,':',second);//빈칸을 채워주세요

    // console.log(result);

    // 출력
    // 2019/04/26 11:34:27
    showAnswer(9, result);    

    // 10번
    let num = 3;
    let a = '<br>';

    //     5
    //   4,5,6
    // 3,4,5,6,7
    let center = num;
    for(let i=0; i<num; i++){
        for(let j=1;j<=(num*2-1);j++){
            if( j<center-i || j>center+i ) a += '☆';
            else a += '★';
        }
        a+='<br>';
    }

    showAnswer(10, a);    
}

const test2 = () => {
    // 11번
    let s = 0;
    for(let i=1;i<=100;i++){
        s+=i;
    }
    showAnswer(11, s);


    // 12번
    // 함수 안에 클래스를 작성해도 되나봄?
    class Wizard{
        constructor (h, m, a){
            this.health = h;
            this.mana = m;
            this.armor = a;
        }

        attack = () =>{
            return '파이어볼';
        }
    }
    const x = new Wizard(545, 210, 10);
    let attack = x.attack();
    showAnswer(12, x.health+"/"+x.mana+"/"+x.armor+"/"+attack);

    // 13번
    let universe = ['수성','금성','지구','화성','목성','토성','천왕성','해왕성','명왕성'];
    let universe_s = 3;
    showAnswer(13, universe[universe_s-1]);

    // 14번
    let num14 = 123151652;
    if(num14 % 3 === 0) showAnswer(14, '짝');
    else showAnswer(14, num14);

    // 15번
    let num15 = '길동쓰';
    showAnswer(15, `안냐세요 저는 ${num15}임니다.`); // 백틱: 중괄호 표현식 가능 -> 템플릿 리터럴 이라고 함

    // 16번
    let num16 = '빱라임씬';
    let arr_num16 = num16.split("");
    arr_num16 = arr_num16.reverse();
    showAnswer(16, arr_num16.join(""));

    // 18번
    let num18 = '20 30 40';
    let arr_num18 = num18.split(" ");
    let sum = 0;
    for(let i=0; i<arr_num18.length; i++){
        sum += Number(arr_num18[i]);
    }
    let avg_num18 = sum / arr_num18.length;
    showAnswer(18, avg_num18);

    // 19번
    let num19 = "2 5";
    let arr_num19 = num19.split(" ");
    let pow_num19 = Math.pow(arr_num19[0],arr_num19[1]);
    showAnswer(19, pow_num19);

    // 20번
    let num20 = "10 2";
    let arr_num20 = num20.split(" ");
    // floor: 내림
    // ceil : 올림
    // round: 반올림
    let ahrt_num20 = Math.floor(arr_num20[0] / arr_num20[1]);
    let skajwl_num20 = arr_num20[0] % arr_num20[1];
    showAnswer(20, `${ahrt_num20} ${skajwl_num20}`);
}

const test3 = () => {
    // 24번
    let num24 = 'mary';
    showAnswer(24, num24.toUpperCase());

    // 25번
    let num25 = '3';
    const circle = (r) => {
        return r*r*3.14;
    }
    let circle_num25 = circle(num25);
    showAnswer(25, circle_num25);

    // 26번
    let num26 = '';
    let solar = {
        // 'Mercury',
    }
}


const showAnswer = (num, answer) => {
// function showAnswer(num, answer){
    let div_q = document.createElement('div');
    div_q.className = 'q_'+num;
    document.getElementsByClassName('wrap_q')[0].append(div_q);

    if(Array.isArray(answer)) answer = "["+answer.join(',')+"]";

    // answerArea = document.getElementsByTagName('div')[0].childNodes[num-1];
    answerArea = div_q;
    answerArea.innerHTML = num+"번 답: "+answer.toString();
}