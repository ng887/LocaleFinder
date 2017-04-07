
$(function(){
	$("#btnSearch").click(function(){
      var searchVal = $("#search-input").val();
      window.open("../html/neighborDetail.html?name="+searchVal);
	});
  	'use strict';
  	var closeCtrl = document.getElementById('btn-search-close'),
  		searchContainer = document.querySelector('.search'),
  		inputSearch = searchContainer.querySelector('.search__input');

  	function init() {
  		initEvents();
  	}

  	function initEvents() {
  		inputSearch.addEventListener('focus', openSearch);
  		closeCtrl.addEventListener('click', closeSearch);
  		document.addEventListener('keyup', function(ev) {
  			// escape key.
  			if( ev.keyCode == 27 ) {
  				closeSearch();
  			}
  		});
  	}

  	function openSearch() {
  		searchContainer.classList.add('search--open');
  		inputSearch.focus();
  	}

  	function closeSearch() {
  		searchContainer.classList.remove('search--open');
  		inputSearch.blur();
  		inputSearch.value = '';
  	}
  	init();
});
