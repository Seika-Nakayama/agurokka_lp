<?php require_once __DIR__ . '/../data/members-card.php'; ?>
<section class="l-member-list" id="l-member-list">
	<div class="js-display">
		<?php contents_title('メンバー紹介'); ?>
	</div>
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