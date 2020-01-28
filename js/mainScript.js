$(document).ready(function() {
  $('input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
      $(".custom-check-box:after").css("opacity", "1");
    } else if ($(this).prop("checked") == false) {
      $(".custom-check-box:after").css("opacity", "0");
    }
  });

  $(".default").on("click", function() {
    $(".default").removeClass("activecur");
    $(".default").html("make default");
    $(this).addClass("activecur");
    $(this).html("default currency");
  });
  // $(document).on("change",function(){$(".debit").on("change",function(){
  // 	var debitcash = parseInt($(".debit").val());

  // 	$("#totaldebit").html(debitcash)
  // 	console.log(debitcash)
  // })})
  // $(".debit").on("change",function(){
  // 	var debitcash = parseInt($(this).val());
  // 	for(var i=0;i<$(".debit").length;i++){
  // 		$("#totaldebit").innerHTML=1
  // 	}
  // })
  // $(".debit").on("change",function(){
  // 	var debitbalance=parseInt($(this).val())
  // 	$("#totaldebit").value+=debitbalance
  // 	console.log(debitbalance)
  // })

  // $("#totaldebit").innerHTML= "jhjkhjdkhf";

  /* 	$('.user-img-wrap').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		let userSetting = $('.user-setting-data');
		if(userSetting.css('display') == 'none') {
			userSetting.css('display', 'block');
		} else {
			userSetting.css('display', 'none');
		}
		$('.chooseMath,.actionMath,.ellipsisMenu,.notification,.msgs,.filterMath').hide();
	}); */

  /* 	$('.main-nav-link').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		let userSetting = $(this).next();

		if(userSetting.css('display') == 'none') {
			userSetting.css('display', 'block');
			$(this).css('border-color', '#fff');
		} else {
			userSetting.css('display', 'none');
			$(this).css('border-color', 'transparent');
		}
	}); */

  $(".user-img-wrap").on("click", function() {
    $(".user-setting-data").toggle();
    $(
      ".chooseMath,.actionMath,.ellipsisMenu,.msgs,.notification,.filterMath,.sub-nav-link-wrapper,.dateRangeTol"
    ).hide();
  });

  $(".notiBtn").on("click", function() {
    $(".notification").toggle();
    $(
      ".chooseMath,.actionMath,.ellipsisMenu,.msgs,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol"
    ).hide();
  });

  $(".msgBtn").on("click", function() {
    $(".msgs").toggle();
    $(
      ".chooseMath,.actionMath,.ellipsisMenu,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol"
    ).hide();
  });

  /* 	$('body').on('click', function() {
		$('.user-setting-data').hide();
		$('.sub-nav-link-wrapper').hide();
		$('.main-nav-link').css('border-color', 'transparent');
	}); */

  $(".top-nav-wrapper .main-nav-link").on("click", function() {
    var nextEl = $(this).next(".sub-nav-link-wrapper");
    if (nextEl.css("display") === "block") {
      nextEl.hide();
    } else {
      $(".top-nav-wrapper .sub-nav-link-wrapper").hide();
      nextEl.show();
    }
  });

  $(".filters").on("click", function() {
    $(".filterMath").toggle();
    $(
      ".chooseMath,.actionMath,.ellipsisMenu,.msgs,.notification,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol"
    ).hide();
  });

  $(".choose").on("click", function() {
    $(".chooseMath").toggle();
    $(
      ".actionMath,.ellipsisMenu,.msgs,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol"
    ).hide();
  });

  $(".filter").on("click", function() {
 	$(".dt-buttons button").toggle();
    $(
      ".chooseMath,.ellipsisMenu,.msgs,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol"
    ).hide();
  });

  $(".hiddenAllItems,.data-title-search-container,.box-data-table-wrapper").on(
    "click",
    function() {
      $(
        ".chooseMath,.actionMath,.msgs,.notification,.filterMath,.user-setting-data,.sub-nav-link-wrapper,.dateRangeTol,.dt-buttons button"
	  ).hide();
    }
  );


  
  $(".ellipsis .fas").on("click", function() {
    $(".ellipsisMenu").toggle();
    $(
      ".filterMath,.chooseMath,.actionMath,.msgs,.notification,.user-setting-data,sub-nav-link-wrapper"
	).hide();
  });

  $('.ellipsisCheck-one input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
      $(".ellipsisOne").hide();
    } else if ($(this).prop("checked") == false) {
      $(".ellipsisOne").show();
    }
  });

  $('.ellipsisCheck-two input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
      $(".ellipsisTwo").hide();
    } else if ($(this).prop("checked") == false) {
      $(".ellipsisTwo").show();
    }
  });

  $('.ellipsisCheck-three input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
      $(".ellipsisThree").hide();
    } else if ($(this).prop("checked") == false) {
      $(".ellipsisThree").show();
    }
  });

  $('.ellipsisCheck-four input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
      $(".ellipsisFour").hide();
    } else if ($(this).prop("checked") == false) {
      $(".ellipsisFour").show();
    }
  });

  $('.ellipsisCheck-five input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
      $(".ellipsisFive").hide();
    } else if ($(this).prop("checked") == false) {
      $(".ellipsisFive").show();
    }
  });

  $('.ellipsisCheck-six input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
      $(".ellipsisSix").hide();
    } else if ($(this).prop("checked") == false) {
      $(".ellipsisSix").show();
    }
  });

  $('.ellipsisCheck-seven input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
      $(".ellipsisSeven").hide();
    } else if ($(this).prop("checked") == false) {
      $(".ellipsisSeven").show();
    }
  });

  $('.ellipsisCheck-eight input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
      $(".ellipsisEight").hide();
    } else if ($(this).prop("checked") == false) {
      $(".ellipsisEight").show();
    }
  });
  $('.ellipsisCheck-nine input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
      $(".ellipsisNine").hide();
    } else if ($(this).prop("checked") == false) {
      $(".ellipsisNine").show();
    }
  });
  $('.ellipsisCheck-ten input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
      $(".ellipsisTen").hide();
    } else if ($(this).prop("checked") == false) {
      $(".ellipsisTen").show();
    }
  });
  $('.ellipsisCheck-eleven input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
      $(".ellipsisEleven").hide();
    } else if ($(this).prop("checked") == false) {
      $(".ellipsisEleven").show();
    }
  });

  $('.ellipsisCheck-twelve input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
      $(".ellipsisTwelve").hide();
    } else if ($(this).prop("checked") == false) {
      $(".ellipsisTwelve").show();
    }
  });

  $("#toggle").click(function(event) {
    if (this.checked) {
      $('.checkNum input[type="checkbox"]').prop("checked", true);
      $(".action").show();
    } else {
      $('.checkNum input[type="checkbox"]').prop("checked", false);
      $(".action").hide();
    }
  });

  $('.checkNum input[type="checkbox"]').click(function() {
    if ($("input[type=checkbox]").is(":checked")) {
      $(".action").show();
    } else {
      $(".action").hide();
    }
  });

  $("#myTable th:not(.ellipsis)").on("click", function() {
    $("#myTable th .sorts .fas:first-of-type").toggleClass("rotate180");
  });

  $(".mobile-menu-icon").on("click", function() {
    let mobileMenuDiv = $(".mobile-menu-container");
    if (mobileMenuDiv.css("display") == "none") {
      $(this)
        .children("img")
        .attr("src", "assets/images/close-menu.png");
      mobileMenuDiv.fadeIn();
      $(".mobile-menu-content").css("left", "0%");
    } else {
      $(this)
        .children("img")
        .attr("src", "assets/images/menu-icon.png");
      mobileMenuDiv.fadeOut();
      $(".mobile-menu-content").css("left", "100%");
    }
    let mobileMenuWidth = $(".mobile-menu-content").innerWidth();
    $(".shadow-section").css("width", "calc(100% - " + mobileMenuWidth + "px)");
  });

  $(".shadow-section").on("click", function() {
    $(".mobile-menu-icon")
      .children("img")
      .attr("src", "assets/images/menu-icon.png");
    $(".mobile-menu-container").fadeOut();
    $(".mobile-menu-content").css("left", "100%");
  });
  $(".main-close").on("click", function() {
    $(".account-info").fadeOut(500);
    $(".saving").html(`<button type="button" class="save add">add</button>`);
    $(".add").on("click", function() {
      $(".account-info").fadeIn(500);
      $(".sup-account-info").fadeIn(500);
      $(".saving").html(`<button type="button" class="save">save</button>
			<button type="button" class="discard">discard</button>`);
      $(".form-container").slideDown(500);
      $(".main-collapse").html(`<i class="fas fa-minus"></i>`);
    });
  });

  $(".main-collapse").on("click", function() {
    if ($(".form-container").css("display") == "block") {
      $(".form-container").slideUp(500);
      $(".sup-account-info").slideUp(500);
      $(this).html(`<i class="fas fa-plus"></i>`);
    } else {
      $(".form-container").slideDown(500);
      $(".sup-account-info").slideDown(500);
      $(this).html(`<i class="fas fa-minus"></i>`);
    }
  });

  /* $( function() {
		$( "#sortable" ).sortable();
		$( "#sortable" ).disableSelection();
	  }); */

  $(".close").on("click", function() {
    $(".sup-account-info").fadeOut(500);
  });
  $(".collapse").on("click", function() {
    if ($(".sup-form-container").css("display") == "block") {
      $(".sup-form-container").slideUp(500);
      $(this).html(`<i class="fas fa-plus"></i>`);
    } else {
      $(".sup-form-container").slideDown(500);
      $(".sup-account-info").slideDown(500);
      $(this).html(`<i class="fas fa-minus"></i>`);
    }
  });

  $(".add-line").on("click", function() {
    $(this).prev().append(`<tr class="accounts">
			<td>
				<select>
					<option>
						choose account
					</option>
					<option value="buildings">
						buildings
					</option>
					<option value="Cleints">
						Cleints
					</option>
					<option value="other-debtors">
						other debtors
					</option>
					<option value="current-assets">
						current assets
					</option>
					<option value="equity-capital">
						equity capital
					</option>
					<option value="shipping">
						shipping
					</option>
					<option value="other-expenses">
						other expenses
					</option>
					<option value="exp22">
						exp22
					</option>
					<option value="sales">
						sales
					</option>
					<option value="equity">
						equity
					</option>
				</select>
			</td>
			<td><input type="text" name="description"></td>
			<td><input type="number" name="debit" class="debit" placeholder="0.00"></td>
			<td><input type="number" name="credit" class="credit" placeholder="0.00">
				<td><button type="button" class="delete"><i class="fas fa-trash-alt"></i></button></td>
		</tr>`);
    $(".delete").on("click", function() {
      $(this)
        .parents("tr")
        .remove();
      // var depit=parseFloat($(this).parents('tr').children(".debit").val);
      // var credit=parseFloat($(this).parents('tr').children(".credit").val)
      // var totalone=parseFloat($("#totaldebit").text())
      // $("#totaldebit").text(totalone-depit);
      // var totaltwo=parseFloat($("#totalcredit").text())
      // $("#totalcredit").text(totaltwo-credit);
    });
    $(".debit").change(function() {
      var sum = 0;
      $(".debit").each(function(i, obj) {
        if ($.isNumeric(this.value)) {
          sum += parseFloat(this.value);
        }
      });

      $("#totaldebit").text(sum);
    });
    $(".credit").change(function() {
      var sum = 0;
      $(".credit").each(function(i, obj) {
        if ($.isNumeric(this.value)) {
          sum += parseFloat(this.value);
        }
      });

      $("#totalcredit").text(sum);
    });
  });
  if ($("#totalcredit").length > 0 || $("#totaldebit").length > 0) {
    $(".save").on("click", function(e) {
      if (
        parseFloat($("#totaldebit").text()) !=
        parseFloat($("#totalcredit").text())
      ) {
        e.preventDefault();
        alert("depit not equal credit");
      }
    });
  }

  $(".discard").on("click", function() {
    $("input").val(null);
    $("select").val(null);
    $("textarea").val(null);
    $(".total").text("");
  });
  $(".contacts").on("click", function() {
    $("#contacts").toggle();
    $("#purchase,#notes,#accounting").hide();
  });

  $(".purchase").on("click", function() {
    $("#purchase").toggle();
    $("#contacts,#notes,#accounting").hide();
  });

  $(".accounting").on("click", function() {
    $("#accounting").toggle();
    $("#contacts,#purchase,#notes").hide();
  });

  $(".notes").on("click", function() {
    $("#notes").toggle();
    $("#contacts,#purchase,#accounting").hide();
  });

  $(".dateMenu").on("click", function() {
    $(".dateRangeTol").toggle();
  });

  // here is the searach filter

  $(".searchInput").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $("#myTable tbody tr").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });

  $(".chartOfAccounts .inner-side ul li .bonga")
    .children(".fas")
    .on("click", function() {
      $(this)
        .next("ul")
        .toggle();
      $(this)
        .children(".fas")
        .toggle();
      $(this)
        .next("ul li")
        .addClass("clearSpeace");
      $(".tree li ul li:last-child").addClass("clearSpeace");
    });

  // var addLine=document.querySelector(".add-line");
  // addLine.addEventListener("click",function(){

  // $(".debit").change(function() {
  // 	var total = 0;
  // 	//console.log(total);
  // 	var debits=[];

  // var i=0;
  // var sum;
  // var debit=$(".debit");
  // for(i=0;i<debit.length;i++){
  //  sum += parseInt(debit[i].value) ;
  // 	console.log(sum)
  // }
  // });

  //   });

  // $('#bepit_total').html()

  $(".accept").on("click", function() {
    $(this)
      .siblings(".refuse")
      .hide();
    $(this)
      .children(".preAccept")
      .hide();
    $(this)
      .children(".accepted")
      .show();
  });

  $(".refuse").on("click", function() {
    $(this)
      .siblings(".accept")
      .hide();
    $(this)
      .children(".preRefuse")
      .hide();
    $(this)
      .children(".refused")
      .show();
  });

  $(".rangeDate").flatpickr({
    mode: "range"
  });

  $(".rangeDate").on("change", function() {
    var aculVal = $(this).val();
    $(".dateMenu").val(aculVal);
  });

  $(".specificDate").flatpickr({
    minDate: "today",
    maxDate: "today"
  });

  $(".specificDate").on("change", function() {
    var aculVal = $(this).val();
    $(".dateMenu").val(aculVal);
  });

  $(".allDatesBefore").flatpickr({
    maxDate: "today"
  });

  $(".defDatesBefore").flatpickr({
    defaultDate: "today"
  });

  $(".allDatesBefore").on("change", function() {
    var aculVal = $(this).val();
    var defVal = $(".defDatesBefore").val();
    $(".dateMenu").val(aculVal + " - " + defVal);
  });

  $(".defDatesAfter").flatpickr({
    defaultDate: "2034-01-01"
  });

  $(".allDatesAfter").flatpickr({});

  $("input[type=date]").flatpickr({});

  $(".allDatesAfter").on("change", function() {
    var aculVal = $(this).val();
    var defVal = $(".defDatesAfter").val();
    $(".dateMenu").val(aculVal + " - " + defVal);
  });

  var oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  var aWeek = oneWeekAgo.toLocaleDateString();

  $(".lastWeek").on("click", function() {
    $(".dateMenu").val(aWeek);
  });

  var oneMonthAgo = new Date();
  oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);
  var aMonth = oneMonthAgo.toLocaleDateString();

  $(".lastMonth").on("click", function() {
    $(".dateMenu").val(aMonth);
  });

  var monthToDate = new Date();
  monthToDate.setDate(monthToDate.getDay());
  var toMonth = monthToDate.toLocaleDateString();

  $(".MonthToDate").on("click", function() {
    $(".dateMenu").val(toMonth + " - " + new Date().toLocaleDateString());
  });

  var lastYear = new Date();
  lastYear.setDate(lastYear.getDate() - 365);
  var aYear = lastYear.toLocaleDateString();

  $(".lastYear").on("click", function() {
    $(".dateMenu").val(aYear);
  });

  var lastYear = new Date();
  lastYear.setDate(lastYear.getDate() - 365);
  var aYear = lastYear.toLocaleDateString();

  $(".YearToDate").on("click", function() {
    $(".dateMenu").val(aYear + " - " + new Date().toLocaleDateString());
  });

  $(".add-purchase").on("click", function() {
    $(this).prev().append(`<tr class="items">
				<td>
					<select>
						<option>
							choose item
						</option>
						<option value="item1">
							item1
						</option>
						<option value="item2">
							item2
						</option>
					</select>
				</td>
				<td><input type="text" name="description"></td>
				<td><input type="text" name="quantity"  class="quantity" placeholder="0"></td>
				<td><input type="text" name="unitPrice" id="unitPrice" class="unitPrice" placeholder="0.00">
				<td><input type="text" name="price" id="price" class="price" placeholder="0.00">
				<td class="tax-con">
					<select class="tax">
						<option class="bal7a" value="100">
							one
						</option>
						<option class="bal7a" value="200">
							two
						</option>
						<option class="bal7a" value="300">
							three
						</option>
					</select>
				</td>
				<td>
				<select>
					<option>
						choose unit of measure
					</option>
					<option value="tax1">
						tax1
					</option>
					<option value="tax2">
						tax2
					</option>
				</select>
			</td>
				<td><button type="button" class="delete"><i class="fas fa-trash-alt"></i></button></td>
			</tr>`);

    $(".delete").on("click", function() {
      $(this)
        .parents("tr")
        .remove();
    });

    //the price before tax function
    $(".unitPrice").on("change", function() {
      $(".unitPrice").each(function(i, obj) {
        var quantity = parseInt(
          $(this)
            .parents("td")
            .prev()
            .children(".quantity")
            .val()
        );
        var unitPrice = parseInt($(this).val());
        var price = $(".unitPrice")
          .parents("td")
          .next()
          .children(".price");

        var primalPrice = 0;

        $(this)
          .parents("td")
          .next()
          .children(".price")
          .val(quantity * unitPrice);

        $(price).each(function(i, obj) {
          var pricev = $(this);
          primalPrice += parseFloat(pricev.val());
        });
        $("#untaxedvalue").text(primalPrice);
      });
      var untaxed = parseFloat($("#untaxedvalue").text());
      var taxes = parseFloat($("#taxesvalue").text());
      var finaltotal = untaxed + taxes;
      $("#finalTotalValue").text(finaltotal);
    });

    $(".quantity").on("change", function() {
      $(".quantity").each(function(i, obj) {
        var quantity = parseInt(
          $(this)
            .parents("td")
            .next()
            .children(".unitPrice")
            .val()
        );
        var unitPrice = parseInt($(this).val());
        var price = $(".quantity")
          .parents("td")
          .siblings()
          .children(".price");

        var primalPrice = 0;

        $(this)
          .parents("td")
          .siblings()
          .children(".price")
          .val(quantity * unitPrice);

        $(price).each(function(i, obj) {
          var pricev = $(this);
          primalPrice += parseFloat(pricev.val());
        });
        $("#untaxedvalue").text(primalPrice);
      });
      var untaxed = parseFloat($("#untaxedvalue").text());
      var taxes = parseFloat($("#taxesvalue").text());
      // console.log(untaxed+taxes)
      var finaltotal = untaxed + taxes;
      $("#finalTotalValue").text(finaltotal);
    });

    $(".tax").on("change", function() {
      var primalTax = 0;
      $(".tax").each(function(i, obj) {
        var tax = $(this);

        primalTax += parseFloat($(tax).val());

        $("#taxesvalue").text(primalTax);
      });
      var untaxed = parseFloat($("#untaxedvalue").text());
      var taxes = parseFloat($("#taxesvalue").text());
      var finaltotal = untaxed + taxes;
      $("#finalTotalValue").text(finaltotal);
    });
  });
  $(".posted").on("click", function() {
    $(".draft .dr").removeClass("arrow");
    $(".draft .pos").addClass("arrow");
    $(".posted").hide();
    $(".drafted").hide();
    $(".draftMenu").show();
  });
  
  $(".resetdraft").on("click", function() {
    $(".draft .pos").removeClass("arrow");
    $(".draft .dr").addClass("arrow");
    $(".drafted").hide();
    $(".draftMenu").hide();
    $(".posted").show();
  });

  $(".mobile-menu-content .main-nav-link").on("click", function() {
    var nextel = $(this).next(".sub-nav-link-wrapper");
    if (nextel.css("display") == "block") {
      nextel.slideUp();
    } else {
      nextel.slideDown();
    }
    $(this)
      .children("span:last-of-type")
      .toggleClass("rotate180");
  });

   $("#myTable").DataTable({
    dom: "Bfrtip",
    buttons: [
      {
        extend: "pdf",
        footer: true,
        exportOptions: {
          columns: "th:not(:last-child,.headOfAction)"
		},
		text: 'Print all',
		exportOptions: {
			modifier: {
				selected: null
			},
			columns: "th:not(:last-child,.headOfAction)"
		}
	  },
	  {
		extend: 'print',
		text: 'Print selected'
	},
      {
        extend: "csv",
		footer: false,
		exportOptions: {
			columns: "th:not(:last-child,.headOfAction)"
		  }
      },
      {
        extend: "excel",
		footer: false,
		exportOptions: {
			columns: "th:not(:last-child,.headOfAction)"
		  }
      },
      {
        extend: "print",
		footer: false,
		exportOptions: {
			columns: "th:not(:last-child,.headOfAction)"
		  }
	  },
	  
	],
	order: [[ 3, 'desc' ], [ 0, 'asc' ]],
	select: true
  });

  $("select").select2({});

});
