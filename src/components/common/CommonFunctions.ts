//import * as toastr1 from 'toastr';
import * as toastr from 'toastr';

export default class CommonFunctions {

  public static errorToasterWithCloseBtn(message: string) {
    toastr.options.timeOut = 5000;
    toastr.options.extendedTimeOut = 0;
    toastr.options.closeButton = true;

    toastr.options.closeHtml = '<button><i class="icon-off">X</i></button>';
    toastr.error(message);
  }

  public static successToasterWithCloseBtn(message: string) {
    toastr.options.timeOut = 5000;
    toastr.options.extendedTimeOut = 0;
    toastr.options.closeButton = true;

    toastr.options.closeHtml = '<button><i class="icon-off">X</i></button>';
    toastr.success(message);
  }


  public static inforoasterWithCloseBtn(message: string) {
    // toastr1.options.timeOut = 500000000;
    // toastr1.options.extendedTimeOut = 50000000;
    // toastr1.options.closeButton = true;
    
    // toastr1.options.closeHtml = '<button><i class="icon-off">X</i></button>';
    // toastr1.info(message);
  }

  public static closeToaster() {
    toastr.remove();
  }


  public static errorToasterWithOutCloseBtn(message: string) {
    toastr.options.timeOut = 2200;
    toastr.options.extendedTimeOut = 0;
    toastr.options.closeButton = true;

    //toastr.options.closeHtml = '<button><i class="icon-off">X</i></button>';
    toastr.error(message);
  }

  public static successToasterWithOutCloseBtn(message: string) {
    toastr.options.timeOut = 2200;
    toastr.options.extendedTimeOut = 0;
    toastr.options.closeButton = true;

    //toastr.options.closeHtml = '<button><i class="icon-off">X</i></button>';
    toastr.success(message);
  }

  public static disableDatePicker() {
    for (
      let index = 0;
      index < document.getElementsByClassName('react-datepicker__input-container').length;
      index++
    ) {
      //@ts-ignore
      document
        .getElementsByClassName('react-datepicker__input-container')
      //@ts-ignore
      [index].childNodes[0].setAttribute('readOnly', true);
    }
  }

  public static checkValues(value: any) {
    return value ? (typeof value == 'object' ? value.value : value) : '';
  }

  public static encodeId(str: any) {
    if (str == undefined || str == null) {
      return null
    }
    return btoa(unescape(encodeURIComponent(`${str}samoncloudazurehomedecor`)));
  }
  public static higlightMenu(e: any) {

    if (e && e.length > 0) {
      var elems = document.querySelectorAll(".navigation a.active");
      [].forEach.call(elems, function (el: any) {
        el.classList.remove("active");
      });
      e[0].classList.add('active')
    }

  }

  public static routeUserHavingSingleRight(): string {
    let rolesList = JSON.parse(localStorage.getItem('userRole'));
    if (rolesList.roles.split(',').length == 1) {
      return rolesList.roles;
    }
    return ""
  }
  public static getQueryString(queryString: string): string {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get(queryString);
    return myParam
  }
  // base64 encoded ascii to ucs-2 string
  public static decodeId(str: any) {
    if (str == undefined || str == null) {
      return null
    }
    else {
      let idWithSAMString = decodeURIComponent(escape(atob(str)));
      return idWithSAMString.replace('samoncloudazurehomedecor', '');
    }
  }

  public static setSearchLocalStorage(name: string, value: any) {
    window.localStorage.setItem(name, JSON.stringify(value))
  }

  public static getSearchLocalStorage(name: string) {
    return JSON.parse(window.localStorage.getItem(name));
  }

  public static removeSearchLocalStorage(name: string) {
    window.localStorage.removeItem(name)
  }
}
