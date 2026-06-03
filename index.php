<body>
<?php include 'sections/loading.php'; ?>
<?php
include 'head.php';
include 'title.php';

$description = "AguRokka（アグロッカ）は、熊本で農業に関わる女性たちが交流し、学び合うコミュニティです。2013年に農林水産省が「農業女子プロジェクト」など、女性の就農を応援する動きとともに、地域から農業の魅力を発信しています。";

include 'header.php';
include 'fixed-link-btn.php';
?>
<main>
	<?php include 'sections/fv.php'; ?>
	<div class="contents_inner">
		<?php include 'sections/about.php'; ?>
		<article id="members" class="article-box">
			<img src="images/main-img/category-bg-member.svg" alt="categoryの文字の画像" class="category">
			<?php include 'sections/member-list.php'; ?>
			<?php include 'sections/member-interview.php'; ?>
			<?php include 'sections/qanda.php'; ?>
		</article>
		<?php include 'sections/activity.php'; ?>
	</div>
</main>
<?php include 'footer.php'; ?>
</body>
</html>
