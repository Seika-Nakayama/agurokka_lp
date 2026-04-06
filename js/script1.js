const loading = document.getElementById('loading');
const progress = document.querySelector('.loading-progress');
const count = document.getElementById('loadingCount');

const fvImages = document.querySelectorAll('.fv img');
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


const header = document.getElementById('h-siteHeader');
const fv = document.querySelector('.fv');
const footer = document.querySelector('footer');
const hamburger = document.getElementById('h-hamburger');
const nav = document.querySelector('.h-global-nav');
const navLinks = nav.querySelectorAll('a');
const fixedLink = document.querySelector('.fixed-link');

hamburger.addEventListener('click', () => {
	header.classList.toggle('is-open')
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		header.classList.remove('is-open')
	})
});

window.addEventListener('scroll', () => {
	const fvBottom = fv.getBoundingClientRect().bottom;
	const footerTop = footer.getBoundingClientRect().top;
	const windowHeight = window.innerHeight;
	if (fvBottom < 0) {
		header.classList.add('is-show')
	} else {
		header.classList.remove('is-show');
		header.classList.remove('is-open')
	}
	if (fvBottom < 0) {
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
window.addEventListener('load', () => {
	const fvSvg = document.querySelector('.fv-svg');
	const path = document.querySelector('.fv-svg path');
	if (!path || !fvSvg) return;
	const length = path.getTotalLength();
	path.style.strokeDasharray = length;
	path.style.strokeDashoffset = length;

	fvSvg.classList.add('is-ready');
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
		}
	})
},
{
	threshold: 0.3
});
svgs.forEach(svg => svgObserver.observe(svg));
const fadeTargets = document.querySelectorAll('.how-agurokka__flexarea, .category, .js-display');
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

$('.member-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	infinite:true,
	speed: 600,
	prevArrow: `<button class="slick-prev slider-nav" aria-label="前の記事"></button>`,
	nextArrow: `<button class="slick-next slider-nav" aria-label="次の記事"></button>`
});


const questions = document.querySelectorAll('.select-q');
const answers = document.querySelectorAll('.select-a');
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
})