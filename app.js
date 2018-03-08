$(document).ready(function() {
	
	
	
	
    // Setup - add a text input to each footer cell
    $('#example tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search..."style="font-size:12px; font-weight:normal; padding:0px 10px; height:30px; " '+title+'" /><span class="input-group-btn"><button class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button" style="height:30px; padding:8px;"><i class="fa fa-filter" aria-hidden="true"></i></button><ul class="dropdown-menu dropdown-menu-right"><li><a href="#" id="NoFilter">Nofilter</a></li><li><a href="#" id="Contains">Contains</a></li><li><a href="#" id="NotContains">NotContains</a></li><li><a href="#" id="StartsWith">StartsWith</a></li><li><a href="#" id="EndsWith">EndsWith</a></li><li><a href="#" id="Equalsto">Equalsto</a></li><li><a href="#" id="NotEqualsto">NotEqualsto</a></li><li><a href="#" id="Greaterthan">Greaterthan</a></li><li><a href="#" id="Lessthan">Lessthan</a></li><li><a href="#" id="GreaterthanEqualto">GreaterthanEqualto</a></li></ul></span>');
    } );
 
 
/*  initComplete: function ()
{
  var r = $('#MyDataTable tfoot tr');
  r.find('th').each(function(){
    $(this).css('padding', 8);
  });
  $('#MyDataTable thead').append(r);
  $('#search_0').css('text-align', 'center');
}, */

    // DataTable
    var table = $('#example').DataTable();
 
    // Apply the search
    table.columns().every( function () {
        var that = this;
 
        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
	
	
	/*********************************************************/
	const NOFILTER='NoFilter';
    const CONTAINS='Contains';
    const NOTCONTAINS='NotContains';
    const STARTWITH='StartsWith';
	const ENDSWITH='EndsWith';
	const EQUALSTO='Equalsto';
	const NOTEQUALSTO='NotEqualsto';
    const GREATERTHAN='Greaterthan';
	const LESSTHAN='Lessthan';
	const GREATERTHANEQUALTO='GreaterthanEqualto';
	const LESSTHANEQUALTO='LessThanEqualto';
    const ISEMPTY='ISEmpty';
	const NOTISEMPTY='NotISEmpty';
	const ISNULL='ISnull';
	const NOTISNULL='NOTISnull';
	const SEPARATEDLINK='Separated link';
	/* Add this list for all the filter*/



    /* Bernard
    This Script will load on page loading/reloading
  

    */
   // $(document).ready(function() {


      var dataBaseRuleFuncQuery= function(filterType){
          console.log('Your filter is ' +  filterType);
          alert('Your filter is ' +  filterType);
		  if(filterType=='Contains'){
			alert('gsr'+filterType);
			var value='B';
			var table = $('#example').DataTable();
			table.column(1).search(value , true, true, false).draw();
			
		  }
		   if(filterType=='NoFilter'){
			alert('gsr'+filterType);
			var table = $('#example').DataTable();
			
			table
			 .search( '' )
			 .columns().search( '' )
			 .draw();
			
		  }
		  
		    if(filterType=='Greaterthan'){
			alert('gsr'+filterType);
			
			//table.draw();
			var table = $('#example').DataTable();
			
				filter( function ( value, index ) {
					return value > 20 ? true : false;
				} );
			
			
		  }
		  
           /*  Filter Rule here */
      };

	  
/*$('#myFilter').on( 'keyup', function () {
    table
        .search( this.value )
        .draw();
} );  
	  
    /* We will track the event using ID or Class here we use an ID 
    When a user click a DOM element with an ID #noFilter an event accur.. Then you do your logic to filter the table 
     */
     var filterType=NOFILTER;

     $("#NoFilter").click(function(event) {
        filterType=NOFILTER;
        // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
    });

    $("#Contains").click(function(event) {
        filterType=CONTAINS;
        // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
    });
    $("#NotContains").click(function(event) {
        filterType=NOTCONTAINS;
          // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
    });

    $("#StartsWith").click(function(event) {

        filterType=STARTWITH;
        // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
     });

     $("#EndsWith").click(function(event) {

        filterType=ENDWITH;
        // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
     });
	  $("#Equalsto").click(function(event) {

        filterType=EQUALSTO;
        // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
     });
	  $("#NotEqualsto").click(function(event) {

        filterType=NOTEQUALTO;
        // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
     });
	  $("#Greaterthan").click(function(event) {

        filterType=GREATERTHAN;
        // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
     });
	  $("#Lessthan").click(function(event) {

        filterType=LESSTHAN;
        // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
     });
	  $("#GreaterthanEqualto").click(function(event) {

        filterType=GREATERTHANEQUALTO;
        // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
     });
	  $("#LessThanEqualto").click(function(event) {

        filterType=LESSTHANEQUALTO;
        // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
     });
      $("#ISEmpty").click(function(event) {

        filterType=ISEMPTY;
        // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
     });
	 $("#NotISEmpty").click(function(event) {

        filterType=NOTISEMPTY;
        // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
     });
	 $("#ISnull").click(function(event) {

        filterType=ISNULL;
        // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
     });
	  $("#NOTISnull").click(function(event) {

        filterType=NOTISNULL;
        // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
     });
	  $("#Separated link").click(function(event) {

        filterType=SEPRATEDLINK;
        // Call This function on every event
        dataBaseRuleFuncQuery(filterType);
     });

   



//});
/*********************************/
	
	
} );

