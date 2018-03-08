$(document).ready(function() {
   // Setup - add a text input to each footer cell
 $('#item tfoot th').each( function () {
     var title = $(this).text();
     $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
 } );

// DataTable
 var otable = $('#item').DataTable();

 // Apply the search
 otable.columns().every( function () {
 
     var that = this;
     $( 'input', this.footer() ).on( 'keyup change', function () {
         if ( that.search() !== this.value ) {
             that
                 .search( this.value )
                 .draw();
         }
     } );
 } );
 } );
 