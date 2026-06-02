<?php require_once __DIR__ . '/../data/members-card.php'; ?>

<section class="l-member-list" id="member-list">
	<h2 class="p-member-list__title">
		AguRokkaメンバー紹介
		<svg width="344" height="199" viewBox="0 0 344 199" fill="none" xmlns="http://www.w3.org/2000/svg" class="scroll-svg p-heart-svg2"><path d="M342.717 155.614C310.895 181.422 262.115 190.44 218.709 185.941C175.303 181.442 131.838 168.117 102.843 143.319C74.3348 118.939 59.1595 84.806 61.7667 53.1788C63.0284 37.8606 70.2145 21.1809 85.836 11.8224C101.709 2.3182 124.766 4.59195 141.145 11.2742C153.516 16.3174 161.91 23.3642 163.414 35.2156C163.884 38.9072 163.52 43.6174 159.592 45.0291C155.705 46.4266 151.667 43.1894 150.107 39.7963C141.914 21.8898 167.844 8.32664 183.397 3.59042C196.813 -0.490882 211.727 -0.814999 224.705 4.34019C238.186 9.69718 245.685 19.1971 250.199 31.6342C255.96 47.4811 256.793 67.523 252.567 83.8649C247.172 104.683 234.393 123.561 217.8 139.057C182.103 172.396 138.155 191.608 80.7268 197.513C50.3073 200.635 21.2951 195.286 0.169006 187.701" stroke="#309E66" stroke-miterlimit="10"/></svg>
	</h2>
	<p class="p-member-list__lead">AguRokkaには、熊本の様々な地域・作物・想いを持った仲間が集まっています。</p>
	<div class="l-member-list__slider">
		<?php
		$half = ceil(count($members) / 2);
		$first_half = array_slice($members, 0, $half);
		?>
		<div class="l-member-list__slider--rl">
			<ul class="l-member-list__row">
				<?php foreach ($first_half as $member): render_member_card($member); endforeach; ?>
			</ul>
		</div>
		<div class="l-member-list__slider--rl">
			<ul class="l-member-list__row">
				<?php foreach ($first_half as $member): render_member_card($member); endforeach; ?>
			</ul>
		</div>
	</div>
	<div class="l-member-list__slider">
		<?php $second_half = array_slice($members, $half); ?>
		<div class="l-member-list__slider--lr">
			<ul class="l-member-list__row">
				<?php foreach ($second_half as $member): render_member_card($member); endforeach; ?>
			</ul>
		</div>
		<div class="l-member-list__slider--lr">
			<ul class="l-member-list__row">
				<?php foreach ($second_half as $member): render_member_card($member); endforeach; ?>
			</ul>
		</div>
	</div>
</section>