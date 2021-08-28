import React from 'react';
import './Progress.css';

function Progress(props) {
    console.log(props);
    return (
        <div className="progress__container">
            <span>
                <p>진행상황</p>
                 <p>2021-08-22 : 클론코딩 완료</p>
                 <p>2021-08-23 : 다크모드(화면 검정색 에서 흰색)전환 추가</p>
                 <p>2021-08-24 : 위로 가기 추가</p>
                 <p>2021-08-25 : 카드가 1줄로만 나오던걸 2줄로 변경</p>
                 <p>2021-08-26 : 네비게이션 위치가 좌측에서 스크롤시 , 우측으로 이동하여 스크롤시 따라가도록 변경</p>
                 <p>2021-08-28 : 기존 About창 현재의 진행상황으로 변경</p>
            </span>
        </div>
    );
}
export default Progress;
