import React, { useState, useEffect } from "react";
import Banner from "../../components/banner";
import InfoModal from '../../components/InfoModal'

const GuestHouse = ({ location }) => {
  const [roomId, setRoomId] = useState("");
  const [open, setOpen] = useState(false);
  const _handleClick = roomId => {
    setRoomId(roomId);
    setOpen(true);
  };

  useEffect(() => {
    console.log(roomId);
  }, [roomId]);

  useEffect(() => {
    return () => window.scrollTo(0, 0);
  });
  return (
    <>
      <Banner location={location} />
      <div id="main">
        <section id="one">
          <div class="inner">
            <header class="major">
              <h2>강화읍 내 유일한 게스트하우스</h2>
            </header>
            <p>
              강화읍 내 유일한 게스트하우스 ‘아삭아삭순무민박’에 오신 것을
              환영합니다. 아삭아삭순무민박이라는 이름은 강화도 특산물인 순무의
              아삭한 식감을 표현한 것으로, 강화도에 대한 애정을 담아
              만들어졌습니다. 아삭민박이 위치하고 있는 건물은 1982년에 지어져
              한때 농기계를 팔던 곳이었지만, 이후 오랜 시간 사람이 드나들지 않던
              빈 공간이었습니다. 2016년, 많은 사람들에게 강화 매력을 알려주고
              싶었던 아삭이들이 방치된 상태로 낡아가던 이 건물을 리모델링하며
              많은 노력과 애정을 쏟아 지금의 아삭민박이 탄생하였습니다. 오래된
              건물인 만큼 가끔 북적이는 아삭의 인기에 수압이 약해지거나, 방음이
              잘 되지 않아 한밤중 속삭이며 대화를 이어가야 할 때도 있습니다.
              하지만 강화의 오래된 방직공장에서 만들어진 오가닉 면직물
              ‘소창’으로 만든 수건을 사용하고, 강화특산물 순무로 만든 순무차를
              즐길 수 있는 아삭민박은 강화도만의 특별한 이야기를 머무는 곳곳에서
              느낄 수 있는 아주 ‘강화’된 게스트하우스입니다. ​ 깨끗하게 정돈된
              침구와 강화 이웃들의 소소한 이야기, 깨알같은 여행팁이 가득찬
              아삭민박에서 알차고 편안한 강화도 여행을 즐기실 수 있을 거예요.
              뿐만 아니라 강화버스터미널, 풍물시장, 소창체험관, 용흥궁,
              성공회성당, 고려궁지, 조양방직을 도보로 이동할 수 있어 뚜벅이
              여행자들에게 더할 나위없는 베이스캠프가 될 것입니다.
            </p>
          </div>
        </section>
        {roomId !== "" && (
          <InfoModal open={open} setOpen={setOpen} roomId={roomId} />
        )}
        <section id="two" class="spotlights">
          <section>
            <a onClick={() => _handleClick(0)} class="image">
              <img
                src="images/bg-guesthouse.jpg"
                alt=""
                data-position="center center"
              />
            </a>
            <div class="content">
              <div class="inner">
                <header class="major">
                  <h3>여자도미토리6인방</h3>
                </header>
                <p>
                  혼자 여행온 여행자들, 친구들과 기숙사, 수학여행 분위기 풍기며
                  하룻밤 하고 싶은 분들에게 추천!(펍에서 웰컴드링크제공)
                </p>
                <ul class="actions">
                  <li>
                    <a onClick={() => _handleClick(0)} class="button">
                      상세보기
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a onClick={() => _handleClick(1)} class="image">
              <img
                src="images/bg-guesthouse.jpg"
                alt=""
                data-position="top center"
              />
            </a>
            <div class="content">
              <div class="inner">
                <header class="major">
                  <h3>남자도미토리6인방</h3>
                </header>
                <p>
                  혼자 여행온 여행자들, 친구들과 기숙사, 수학여행 분위기 풍기며
                  하룻밤 하고 싶은 분들에게 추천!(펍에서 웰컴드링크제공)
                </p>
                <ul class="actions">
                  <li>
                    <a onClick={() => _handleClick(1)} class="button">
                      상세보기
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a onClick={() => _handleClick(2)} class="image">
              <img
                src="images/bg-guesthouse.jpg"
                alt=""
                data-position="25% 25%"
              />
            </a>
            <div class="content">
              <div class="inner">
                <header class="major">
                  <h3>더블룸(2인실)</h3>
                </header>
                <p>
                  친구와 아침 해뜰때까지 두런두런 수다떨고 싶은 아담하고 따뜻한
                  방. 혼자온 여행자에게는 혼자만의 시간을 보낼 수 있지요.
                  (펍에서 웰컴드링크 제공)
                </p>
                <ul class="actions">
                  <li>
                    <a onClick={() => _handleClick(2)} class="button">
                      상세보기
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a onClick={() => _handleClick(3)} class="image">
              <img
                src="images/bg-guesthouse.jpg"
                alt=""
                data-position="25% 25%"
              />
            </a>
            <div class="content">
              <div class="inner">
                <header class="major">
                  <h3>전제대관</h3>
                </header>
                <p>
                  1박 2일 워크숍, 졸업 여행, 우정 여행 등 오늘 하루는 우리집,
                  작업실처럼!! 비전을 찾는 팀들이 워크숍으로 많이 찾기도 합니다.
                </p>
                <ul class="actions">
                  <li>
                    <a onClick={() => _handleClick(3)} class="button">
                      상세보기
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section id="three">
          <div class="inner">
            <header class="major">
              <h2>예약하기</h2>
            </header>
            <p>
              온라인 예약신청 작성 또는 전화로 예약을 진행해주시면 아삭매니저가
              확인 후 예약 가능 이메일을 보내드립니다. 가예약은 24시간 유효하며,
              24시간 내 숙박비를 입금해주시면 예약이 완료되며, 확인 및 이용 안내
              메일을 보내드립니다. 계좌안내 (201301-04-338369 국민은행 유명상)
              *체크인 7일 전 취소시 80% 환불, 체크인 3일 전 취소시 50% 환불,
              체크인 2일 전 취소시 30% 환불, 당일 혹은 1일 전 취소시 환불불가
            </p>
            <ul class="actions">
              <li>
                <a href="generic.html" class="button next">
                  예약하기
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default GuestHouse;
