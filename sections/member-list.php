<?php require_once __DIR__ . '/../data/members-card.php'; ?>

<section class="l-member-list" id="member-list">
	<h2 class="p-member-list__title">
		<span class="p-member-list__title-text">
			AguRokka
			<svg width="201" height="140" viewBox="0 0 201 140" fill="none" xmlns="http://www.w3.org/2000/svg" class="scroll-svg p-heart-svg2"><path d="M200.425 101.698C134.667 131.574 83.5514 132.145 37.5441 109.661C-8.46318 87.1777 -7.52228 46.4547 18.0639 22.1459C36.4805 4.64875 62.7309 7.58122 67.7607 8.41621C88.9854 11.9397 97.1911 25.9323 100.349 34.551C101.334 37.2355 100.645 41.6688 97.2312 43.5352C93.852 45.3828 89.5642 41.1924 90.8868 35.5517C94.171 21.5461 104.059 12.8016 114.072 6.64429C125.846 0.826572 144.348 -2.18409 161.703 3.65219C195.667 15.0742 213.916 62.2099 172.167 95.5742C145.516 116.874 80.2967 148.807 8.54877 136.231" stroke="#309E66" stroke-miterlimit="10"/></svg>
		</span>
		メンバー紹介
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