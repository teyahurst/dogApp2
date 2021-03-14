'use strict';

function getDogBreed(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));

     

}

function displayResults(responseJson) {
  console.log(responseJson);
  //clears the results 
  $('.results').html('');
  //replaces the image with the new image
      $('.results').append(`<img src="${responseJson.message}" class="results">`)
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let breed = $('input[type="text"]').val();
    breed = breed.toLowerCase();
    getDogBreed(breed);
    
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});