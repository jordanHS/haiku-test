import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Haiku } from './haiku';


$(document).ready(function() {
  $('#haikuForm').submit(function(event) {
    event.preventDefault();
    let firstLine = $("#firstLine").val();
    let secondLine = $("#secondLine").val();
    let thirdLine = $("#thirdLine").val();
    let haiku = new Haiku(firstLine, secondLine, thirdLine);
    $("#solution").text(haiku.isValid());
  });
});
