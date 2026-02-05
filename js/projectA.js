

window.onload = function () {
  // 1. 초기화 및 요소 선택
  const mainHeader = document.getElementById("main-header");
  const stickyHeader = document.getElementById("sticky-header");
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot, .carousel-dots .dot"); // 두 가지 클래스 모두 대응
  const upButton = document.getElementById("upButton");
  const popupOverlay = document.getElementById("popupOverlay");
  const scrollIndicator = document.querySelector(".scroll-indicator");

  let currentSlide = 0;
  const slideInterval = 7000;
  let autoPlay;

  // 2. 팝업 제어 (글로벌 노출을 위해 window 객체에 할당)
  window.togglePopup = function (show) {
    if (popupOverlay) {
      popupOverlay.style.display = show ? "flex" : "none";
    }
  };

  // 3. 슬라이더 & 카루셀 로직
  function updateSlide(index) {
    if (slides.length === 0) return;

    // 활성 클래스 제거
    slides.forEach((s) => s.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));

    // 인덱스 순환
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    // 새 슬라이드 활성화
    slides[currentSlide].classList.add("active");
    if (dots[currentSlide]) dots[currentSlide].classList.add("active");
  }

  window.changeSlide = function (direction) {
    stopAutoPlay();
    updateSlide(currentSlide + direction);
    startAutoPlay();
  };

  function startAutoPlay() {
    autoPlay = setInterval(() => {
      updateSlide(currentSlide + 1);
    }, slideInterval);
  }

  function stopAutoPlay() {
    clearInterval(autoPlay);
  }

  // 도트 클릭 이벤트 바인딩
  dots.forEach((dot, index) => {
    dot.addEventListener("click", (e) => {
      e.stopPropagation();
      stopAutoPlay();
      updateSlide(index);
      startAutoPlay();
    });
  });

  // 초기 실행
  startAutoPlay();

  // 4. 스크롤 통합 관리
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // 헤더 상태 변경 (Main vs Sticky)
    if (scrollY > 150) {
      if (stickyHeader) stickyHeader.classList.add("active");
      if (mainHeader) {
        mainHeader.style.opacity = "0";
        mainHeader.style.pointerEvents = "none";
      }
    } else {
      if (stickyHeader) stickyHeader.classList.remove("active");
      if (mainHeader) {
        mainHeader.style.opacity = "1";
        mainHeader.style.pointerEvents = "auto";
      }
    }

    // Up 버튼 표시
    if (upButton) {
      if (scrollY > 300) upButton.classList.add("show");
      else upButton.classList.remove("show");
    }

    // 스크롤 인디케이터 투명도 조절
    if (scrollIndicator) {
      const opacity = Math.max(0, 1 - scrollY / 500);
      scrollIndicator.style.opacity = opacity;
    }
  });

  // 5. 인터랙션 요소 (Hover & Click)

  // 포트폴리오 아이템 호버
  document.querySelectorAll(".portfolio-item").forEach((item) => {
    item.addEventListener("mouseenter", () => (item.style.opacity = "0.8"));
    item.addEventListener("mouseleave", () => (item.style.opacity = "1"));
  });

  // 서비스 아이템 애니메이션
  document.querySelectorAll(".service-item").forEach((item) => {
    item.style.transition = "all 0.3s ease";
    item.addEventListener(
      "mouseenter",
      () => (item.style.transform = "translateY(-5px)"),
    );
    item.addEventListener(
      "mouseleave",
      () => (item.style.transform = "translateY(0)"),
    );
  });

  // 브랜드 아이템 스케일
  document.querySelectorAll(".brand-item").forEach((item) => {
    item.style.cursor = "pointer";
    item.style.transition = "transform 0.3s ease";
    item.addEventListener(
      "mouseenter",
      () => (item.style.transform = "scale(1.05)"),
    );
    item.addEventListener(
      "mouseleave",
      () => (item.style.transform = "scale(1)"),
    );
    item.addEventListener("click", () => console.log("Brand clicked"));
  });

  // 6. Intersection Observer (Fade-in 애니메이션)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target); // 한 번 나타나면 감시 종료
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".content-section, .portfolio-section")
    .forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(20px)";
      section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      observer.observe(section);
    });
  // 7. 구글 애널리틱스 초기화
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-EJW1N71FQF");

  // Up 버튼 클릭 이벤트
  if (upButton) {
    upButton.onclick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 브라우저 네이티브 부드러운 스크롤 사용
      });
    };
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    } else if (e.key === "ArrowUp") {
      window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
    }
  });

  console.log("GROVE: Script successfully optimized and loaded.");
};
