window.onload = function() {
    test();
};

function test(){
    // 1번
    var nums = [100, 200, 300, 400, 500];
    nums.pop();
    nums.pop();
    showAnswer(1, nums);

    // 2번
    // <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
    // **데이터**
    // var arr = [200, 100, 300];
    // //pass
    // **출력**
    // [200, 100, 10000, 300]

    showAnswer(2, nums);
}

function showAnswer(num, answer){
    let div_q = document.createElement('div');
    div_q.className = 'q_'+num;
    document.getElementsByClassName('wrap_q')[0].append(div_q);

    answerArea = document.getElementsByTagName('div')[0].childNodes[num-1];
    answerArea.innerHTML = num+"번 답: "+answer;
}