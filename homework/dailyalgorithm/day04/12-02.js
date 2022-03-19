function solution(arr)
{
    var answer = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    for( i = 0; arr.length >i; i++ ){
        for( j = i + 1; arr.length > j; j++ ){
            if( arr[i] === arr[j] ){
                arr.splice(i,i+1)
                console.log(arr)
            }


        }
    }
    console.log(arr)

    
    return answer;
}