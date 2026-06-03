<?php
function contents_title(string $title, string $subtitle = ''): void {
    $span = $subtitle !== '' ? "<span>{$subtitle}</span>" : '';
    echo <<<HTML
    <h2 class="contents-title">
        <img src="images/icon/flower.svg" alt="肥後六花モチーフアイコン" class="flower-icon">
        {$title}{$span}
    </h2>
    HTML;
}
?>
