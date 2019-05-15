import React from "react";
import Photo from "../Photo";
import Modal from "react-responsive-modal";
import styles from "./styles.module.scss";

const InfoModal = ({ open, setOpen, roomId }) => {
  const roomInfo = [
    {
      title: "여자도미토리6인방",
      subTitle: "여자도미토리6인방 서브타이틀",
      image: ""
    },
    {
      title: "남자도미토리6인방",
      subTitle: "남자도미토리6인방 서브타이틀",
      image: ""
    },
    {
      title: "더블룸(2인실)",
      subTitle: "더블룸(2인실)더블룸(2인실)",
      image: ""
    },
    {
      title: "전체대관",
      subTitle: "전체대관전체대관",
      image: ""
    }
  ];
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      center
      classNames={{ modal: styles.modalContainer }}
    >
      <div className={styles.headerWrapper}>
        <h2 className={styles.header}>{roomInfo[roomId].title}</h2>
        <p className={styles.subHeader}>{roomInfo[roomId].subTitle}</p>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.leftPane}>
          <Photo />
          <div className={styles.bottomPhoto}>
            <div className={styles.description}>
              <h5>제공사항</h5>
              <p>강화도 직물공장에서 만들어진 소창수건 2장</p>
              <p>강화순무차(티백)</p>
              <p>
                드라이기, 고데기, 정수기, 전자렌지, 냉장고, 토스트기, 포트,
                보드게임, 도서 자유롭게 사용가능 (공용거실에 비치되어있습니다)
              </p>
            </div>
            {/* <img
              src={require("../../images/female.png")}
              className={styles.ico__human}
            /> */}
          </div>
        </div>
        <div className={styles.rightPane}>
          <h5>기준 숙박인원 1명 최대 숙박인원 6명</h5>
          <p>
            혼자 여행온 여행자들, 친구들과 기숙사, 수학여행 분위기 풍기며 하룻밤
            하고 싶은 분들에게 추천합니다. (1층 펍'스트롱파이어'에서 웰컴드링크
            제공 / 펍 휴무일인 일,월엔 다른 음료로 대체)
          </p>
          <p>
            *체크인 15:00~, 체크아웃 ~11:00 (자정까지 체크인 하지 않을 경우
            노쇼로 판단) *바베큐 및 취사가 불가능합니다. *아삭민박은 강화
            여행자들이 편안하게 쉬어갈 수 있는 공간입니다. 모두를 위해 자정
            이후엔 소등을 합니다. *침대는 체크인 순으로 선택하실 수 있습니다.
          </p>

          <div className={styles.roomInfo}>Room Info</div>
        </div>
        {/* <Photo /> */}
      </div>
    </Modal>
  );
};

export default InfoModal;
