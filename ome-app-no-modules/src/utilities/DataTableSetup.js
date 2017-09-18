import $ from 'jquery';

const DataTableSetup = () => {
  $(document).ready(() => {
    $('.table').dataTable({
      bPaginate: false,
      bFilter: false,
      bInfo: false
    });
  });
}

export default DataTableSetup;
