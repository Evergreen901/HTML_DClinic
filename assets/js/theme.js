$(document).ready(function () {

	var hamburger = $('.hamburger')
	var navMenu = $('.nav-menu')

	hamburger.click(function () {
		hamburger.toggleClass('active')
		navMenu.toggleClass('active')
	})

	var nav_cat_open = $('.nav-cat-open')
	var nav_brand_open = $('.nav-brand-open')
	var nav_spec_open = $('.nav-spec-open')
	var nav_cat = $('.nav-categories')
	var nav_brand = $('.nav-brand')
	var nav_spec = $('.nav-spec')


	$('.close-mark').css('display', 'none')

	nav_cat_open.click(function () {
		nav_cat.toggleClass('sub-menu-show')
		$('.cat-open').toggleClass('rotate')
	})
	nav_brand_open.click(function () {
		nav_brand.toggleClass('sub-menu-show')
		$('.brand-open').toggleClass('rotate')
	})
	nav_spec_open.click(function () {
		nav_spec.toggleClass('sub-menu-show')
		$('.spec-open').toggleClass('rotate')
	})


	$(window).scroll(function () {
		if ($(window).scrollTop() >= 1) {
			$('.header').addClass('header-sticky');
		} else {
			$('.header').removeClass('header-sticky');
		}
	});

	$('.nav-item').click(function () {
		$(this).toggleClass('active');
		$(this).siblings().removeClass('active');
	})

	$('.nav-link').click(function() {
		hamburger.toggleClass('active')
		navMenu.toggleClass('active')
	});

	$('#tab1').click(function () {
		$(this).addClass('active')
		$(this).siblings().removeClass('active');
		$('#tab-panel1').addClass('active')
		$('#tab-panel2').removeClass('active')
	})

	$('#tab2').click(function () {
		$(this).addClass('active')
		$(this).siblings().removeClass('active');
		$('#tab-panel1').removeClass('active')
		$('#tab-panel2').addClass('active')
	})

	$('.item__header').click(function () {
		$(this).parent().toggleClass('active')
		// $(this).parent().siblings().removeClass('active')
	})

	$('.goto').click(function(){
		$('.place-detail').addClass('active')
	})
	$('.place-detail__close').click(function(){
		$('.place-detail').removeClass('active');
	})
})