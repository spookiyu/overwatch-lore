$(function() {
  
  $('.multi').append('<button class="collapsed">Expand</button>');
  
});

$('body').on('click', '#list button', function() {
  if ($(this).hasClass('collapsed')) {
    $(this).siblings(':first-child').css("margin-bottom", "42px");
    $(this).siblings('.secondary').css("top", "100%");
    $(this).removeClass('collapsed');
  } else {
    $(this).siblings(':first-child').css("margin-bottom", "0");
    $(this).siblings('.secondary').css("top", "0");
    $(this).addClass('collapsed');
  }
});

$('#allFilter, #everyoneFilter').click( function() {
  if (!$(this).hasClass('active')) {
    $('#list li').css('display', 'list-item');
    $('#list li .note').css('display', 'initial');
    $('*').removeClass('active');
    $(this).addClass('active');
  }
});

function typeFilter(filterClass, that) {
  if (!$(that).hasClass('active')) {
    $('#list li:not(.' + filterClass + '), #list li:not(.' + filterClass + ') .note').css('display', 'none');
    $('#list li.' + filterClass).css('display', 'list-item');
    $('#list li.' + filterClass + ' .note').css('display', 'initial');
    $('*').removeClass('active');
    $(that).addClass('active');
  }
}

$('#videoFilter').click( function() {  typeFilter('video', this); });
$('#blogFilter').click( function() {  typeFilter('blog', this); });
$('#comicFilter').click( function() {  typeFilter('comic', this); });
$('#tweetFilter').click( function() {  typeFilter('tweet', this); });

$('#anaFilter').click( function() {  typeFilter('ana', this); });
$('#asheFilter').click( function() {  typeFilter('ashe', this); });
$('#bastionFilter').click( function() {  typeFilter('bastion', this); });
$('#baptisteFilter').click( function() {  typeFilter('baptiste', this); });
$('#brigitteFilter').click( function() {  typeFilter('brigitte', this); });
$('#doomfistFilter').click( function() {  typeFilter('doomfist', this); });
$('#dvaFilter').click( function() {  typeFilter('dva', this); });
$('#hanzoFilter').click( function() {  typeFilter('hanzo', this); });
$('#genjiFilter').click( function() {  typeFilter('genji', this); });
$('#junkratFilter').click( function() {  typeFilter('junkrat', this); });
$('#lucioFilter').click( function() {  typeFilter('lucio', this); });
$('#mccweeFilter').click( function() {  typeFilter('mccwee', this); });
$('#meiFilter').click( function() {  typeFilter('mei', this); });
$('#mercyFilter').click( function() {  typeFilter('mercy', this); });
$('#moiraFilter').click( function() {  typeFilter('moira', this); });
$('#orisaFilter').click( function() {  typeFilter('orisa', this); });
$('#pharahFilter').click( function() {  typeFilter('pharah', this); });
$('#reaperFilter').click( function() {  typeFilter('reaper', this); });
$('#reinhardtFilter').click( function() {  typeFilter('reinhardt', this); });
$('#roadhogFilter').click( function() {  typeFilter('roadhog', this); });
$('#76Filter').click( function() {  typeFilter('76', this); });
$('#sombraFilter').click( function() {  typeFilter('sombra', this); });
$('#symmetraFilter').click( function() {  typeFilter('symmetra', this); });
$('#torbjornFilter').click( function() {  typeFilter('torbjorn', this); });
$('#tracerFilter').click( function() {  typeFilter('tracer', this); });
$('#widowFilter').click( function() {  typeFilter('widow', this); });
$('#winstonFilter').click( function() {  typeFilter('winston', this); });
$('#wbFilter').click( function() {  typeFilter('wb', this); });
$('#zaryaFilter').click( function() {  typeFilter('zarya', this); });
$('#zenyattaFilter').click( function() {  typeFilter('zenyatta', this); });