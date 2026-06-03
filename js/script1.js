const loading = document.getElementById('l-loading');
const progress = document.querySelector('.l-loading__progress');
const count = document.getElementById('l-loadingCount');

const fvImages = document.querySelectorAll('.l-fv img');
const totalImages = fvImages.length;
let loadedCount = 0;
let percent = 0;

fvImages.forEach(img => {
	if(img.complete){
		loadedCount++;
	}else{
		img.addEventListener('load', () => loadedCount++);
		img.addEventListener('error', () => loadedCount++);
	}
});

const loadingTimer = setInterval(() => {
	const target = totalImages === 0 ? 100 : Math.floor((loadedCount / totalImages) * 100);
	if(percent < target){
		percent++;
		progress.style.width = percent + '%';
		count.textContent = percent;
	}

	if (percent >= 100) {
		clearInterval(loadingTimer);
		setTimeout(() => {
			loading.classList.add('is-hide');
			setTimeout(() => {
				loading.style.display = 'none';
				document.body.classList.add('is-loaded');
				if(typeof startFvCopyAnimation === 'function'){
					startFvCopyAnimation();
				}
			}, 600);
		}, 200);
	}
}, 20);


const header = document.getElementById('l-siteHeader');
const fv = document.querySelector('.l-fv');
const footer = document.querySelector('footer');
const hamburger = document.getElementById('c-hamburger');
const nav = document.querySelector('.l-global-nav');
const fixedLink = document.querySelector('.c-fixed-link');

hamburger.addEventListener('click', () => {
	header.classList.toggle('is-open')
});

if (nav) {
	const navLinks = nav.querySelectorAll('a');
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			header.classList.remove('is-open')
		})
	});
}

window.addEventListener('scroll', () => {
	const lFvBottom = fv.getBoundingClientRect().bottom;
	const footerTop = footer.getBoundingClientRect().top;
	const windowHeight = window.innerHeight;
	if (lFvBottom < 0) {
		header.classList.add('is-show')
	} else {
		header.classList.remove('is-show');
		header.classList.remove('is-open')
	}
	if (lFvBottom < 0) {
		fixedLink.classList.add('is-show')
	} else {
		fixedLink.classList.remove('is-show')
	}
	if (footerTop < windowHeight) {
		fixedLink.classList.add('is-hide')
	} else {
		fixedLink.classList.remove('is-hide')
	}
});

const slides = document.querySelectorAll('.slide');
let current = 0;

if (slides.length > 0) {
	slides[current].classList.remove('is-active');
	setTimeout(() => {
		slides[current].classList.add('is-active')
	},
	50);

	setInterval(() => {
		slides[current].classList.remove('is-active');
		current = (current + 1) % slides.length;
		slides[current].classList.add('is-active')
	},
	5000);
}

window.addEventListener('load', () => {
	const lFvSvg = document.querySelector('.fv-svg');
	const path = document.querySelector('.fv-svg path');
	if (!path || !lFvSvg) return;
	const length = path.getTotalLength();
	path.style.strokeDasharray = length;
	path.style.strokeDashoffset = length;

	lFvSvg.classList.add('is-ready');
	const textAnimationTime = 6000;
	setTimeout(() => {
		path.style.transition = 'stroke-dashoffset 3.5s ease';
		path.style.strokeDashoffset = 0
	},
	textAnimationTime);
});

const svgs = document.querySelectorAll('.scroll-svg');
const svgObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-show')
			svgObserver.unobserve(entry.target)
		}
	})
},
{
	threshold: 0.3
});

svgs.forEach(svg => svgObserver.observe(svg));
const fadeTargets = document.querySelectorAll('.l-about__panel, .category, .js-display');
const fadeObserver = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-show');
			fadeObserver.unobserve(entry.target)
		}
	})
},{
	threshold: 0.1
});

fadeTargets.forEach(el => fadeObserver.observe(el));
const splitTargets = document.querySelectorAll('.js-split');
splitTargets.forEach(el => {
	const text = el.textContent;
	const baseDelay = Number(el.dataset.delay) || 0;
	el.textContent = '';

	[...text].forEach((char, i) => {
		const span = document.createElement('span');
		span.textContent = char === ' ' ? '\u00A0' : char;
		span.style.setProperty(
			'--delay',
			 `${baseDelay + i * 0.05}s`
			);
		el.appendChild(span);
	});
}); 

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-show')
			observer.unobserve(entry.target)
		}
	})
},
{
	threshold: 0.4
});

splitTargets.forEach(el => observer.observe(el));
function startFvCopyAnimation() {
	const chars = document.querySelectorAll('.js-svg');
	chars.forEach(el => {
		const delay = Number(el.dataset.delay) || 0;
		setTimeout(() => {
			el.classList.add('is-show')
		},
		delay * 1000)
	})
}

const sliderEl = document.querySelector('.c-member-slider');
if (sliderEl) {
	const wrapper = sliderEl.querySelector('.swiper-wrapper');
	const originalSlides = [...wrapper.querySelectorAll('.swiper-slide')];
	const realCount = originalSlides.length;
	const clonesBefore = 2;

	// 末尾2枚のクローンを先頭に挿入（逆順）
	for (let i = realCount - 1; i >= realCount - clonesBefore; i--) {
		const clone = originalSlides[i].cloneNode(true);
		clone.setAttribute('aria-hidden', 'true');
		wrapper.insertBefore(clone, wrapper.firstChild);
	}
	// 先頭2枚のクローンを末尾に追加
	for (let i = 0; i < clonesBefore; i++) {
		const clone = originalSlides[i].cloneNode(true);
		clone.setAttribute('aria-hidden', 'true');
		wrapper.appendChild(clone);
	}

	const memberSwiper = new Swiper('.c-member-slider', {
		initialSlide: clonesBefore,
		speed: 600,
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 0,
		watchOverflow: false,
		on: {
			slideChangeTransitionEnd(swiper) {
				const idx = swiper.activeIndex;
				if (idx < clonesBefore || idx >= clonesBefore + realCount) {
					const slides = [...swiper.slides];
					slides.forEach(s => { s.style.transition = 'none'; });
					void swiper.wrapperEl.offsetWidth;
					if (idx < clonesBefore) {
						swiper.slideTo(idx + realCount, 0, false);
					} else {
						swiper.slideTo(idx - realCount, 0, false);
					}
					requestAnimationFrame(() => requestAnimationFrame(() => {
						slides.forEach(s => { s.style.transition = ''; });
					}));
				}
			}
		}
	});

	// ページネーション手動構築
	const paginationEl = sliderEl.querySelector('.swiper-pagination');
	if (paginationEl) {
		paginationEl.innerHTML = '';
		for (let i = 1; i <= realCount; i++) {
			const bullet = document.createElement('span');
			bullet.className = 'swiper-pagination-bullet';
			bullet.textContent = String(i);
			bullet.addEventListener('click', () => memberSwiper.slideTo(i + clonesBefore - 1));
			paginationEl.appendChild(bullet);
		}

		const bullets = [...paginationEl.querySelectorAll('.swiper-pagination-bullet')];
		function updatePagination() {
			const displayIdx = ((memberSwiper.activeIndex - clonesBefore) % realCount + realCount) % realCount;
			bullets.forEach((b, i) => b.classList.toggle('swiper-pagination-bullet-active', i === displayIdx));
		}
		memberSwiper.on('slideChange', updatePagination);
		updatePagination();
	}

	sliderEl.querySelector('.swiper-btn-prev')?.addEventListener('click', () => memberSwiper.slidePrev());
	sliderEl.querySelector('.swiper-btn-next')?.addEventListener('click', () => memberSwiper.slideNext());
}


const questions = document.querySelectorAll('.p-faq__question');
const answers = document.querySelectorAll('.p-faq__answer');
questions.forEach((q, index) => {
	q.addEventListener('click', () => {
		answers.forEach(a => a.classList.remove('is-show'));
		questions.forEach(q => q.classList.remove('is-active'));
		answers[index].classList.add('is-show');
		q.classList.add('is-active')
	})
});

if (questions.length && answers.length) {
	questions[0].classList.add('is-active');
	answers[0].classList.add('is-show')
}
const toggleBtn = document.getElementById('activity-toggle');
const pastArea = document.getElementById('activity-past');
if (toggleBtn) {
	const icon = toggleBtn.querySelector('.open-icon');
	const label = toggleBtn.querySelector('.look-label');
	toggleBtn.addEventListener('click', () => {
		const isOpen = pastArea.classList.toggle('is-open');
		if (isOpen) {
			icon.textContent = '−';
			label.textContent = '閉じる'
		} else {
			icon.textContent = '＋';
			label.textContent = '全て見る(他9件)'
		}
	});
}

window.history.scrollRestoration = 'manual';
window.scrollTo(0, 0);