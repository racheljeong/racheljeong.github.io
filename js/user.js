
function userInput(){
  var input = new Input($(id).val(), $("#name").val(),$(password).val());
  console.log(input);

  //기존데이터 가져오기. 존재하지 않을때만 새배열 생성
  var arr = JSON.parse(localStorage.getItem("arr"));
  if(arr == null) arr = [];
  arr.push(input);
  console.log(arr);

  //배열로 저장
  var jsonStr = JSON.stringify(arr);
  localStorage.setItem("arr", jsonStr);

  //초기화
  $(id).val('').focus();
  $("#name").val('');
  $(password).val('');

  //새로입력된 정보로 갱신
  loadinput();
}

function input(name, memo){
  this.id = id;
  this.name = name;
  this.password = password;
}

/**
 * html DOM등록을 마치면(load), localStorage의 데이터를 읽어서 테이블로 출력
 */ 
$(function(){
  //방문자 정보 화면 출력하기
  input();
});
/**
   * 화면 최초로딩시, 방문자정보 새로 추가시 호출되어
   * 화면에 방명록정보를 표시한다.
   */ 
  function input(){
    var arr = JSON.parse(localStorage.getItem("arr"));
    var $input = $(input);//table태그
    console.log(arr);

    //헤더부분 추가
    $input.html("<tr><th>No</th><th>이름</th><th>아이디</th></tr>");

    //내용부분 추가
    // if(arr == null){
    //   $guestBook.append("<tr><td colspan='4'>방문자가 없습니다.</td></tr>");
    // }
    // else {
    //   arr.reverse();//방명록 내림차순

      $.each(arr, function(index, elem){
        console.log(index, elem);
       // var date = new Date(elem.time); //unix second -> date객체
        var tr = "<tr>";
        tr += "<td>" + (index + 1) + "</td>";
        tr += "<td>" + elem.id + "</td>";
        tr += "<td>" + elem.name.replaceAll("\n", "<br>") + "</td>";
        //tr += "<td>" + displayTime(date) + "</td>";
        tr += "</tr>";
        console.log(tr);
        $input.append(tr);//자식요소로써 맨뒤에 추가
      });
    // }

  }