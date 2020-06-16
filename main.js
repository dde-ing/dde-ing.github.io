window.onload = function() {
    test1();
    test2();
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