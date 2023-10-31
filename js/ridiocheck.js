       //라디오 버튼 이벤트 처리
       const genderResult = document.getElementById("genderResult");
       const maleRadio = document.getElementById("maleRadio");
       const femaleRadio = document.getElementById("femaleRadio");
       const otherRadio = document.getElementById("otherRadio");

       maleRadio.addEventListener("change",updateGenderResult);
       femaleRadio.addEventListener("change",updateGenderResult);
       otherRadio.addEventListener("change",updateGenderResult);
       function updateGenderResult(){
           if(maleRadio.checked){
               genderResult.textContent = "선택된 성별 : 남성";
           }else if(femaleRadio.checked){
               genderResult.textContent = "선택된 성별 : 여성";
           }else if(otherRadio.checked){
               genderResult.textContent = "선택된 성별 : 기타";
           }
       }
       //체크박스 이벤트 처리
       const fruitsResult = document.getElementById("fruitsResult");
       const appleCheck = document.getElementById("appleCheck");
       const bananaCheck = document.getElementById("bananaCheck");

       appleCheck.addEventListener("change",updatefruitsResult);
       bananaCheck.addEventListener("change",updatefruitsResult);

       /*
           updatefruitsResult = change 이벤트가 발생할 때 실행
           현재 선택된 채크박스를 확인하고 선택된 과일 항목을 배열에 추가한다음 결과 메세지를 업데이트
       */
       function updatefruitsResult(){
           const selectFruits = []; // 과일을 담을 수 있는 빈 배열
           /*
           appleCheck.checked = checked의 속성을 사용해서 각 체크박스의 선택 여부를 확인하고, 선택된 과일 항목을 selectFruits배열에 추가
           */
           if(appleCheck.checked){
               selectFruits.push("사과");
           }
           if(bananaCheck.checked){
               selectFruits.push("바나나")
           }

           fruitsResult.textContent = "선택된 과일 : " + selectFruits.join(",");
       }
