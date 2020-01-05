export default class Constants {
  //#region  Product Search
  public static ProductSearchDropdownsAPI: string = '/api/Merchandise/GetProductSearchDropdowns';
  public static ProductSearch: string = '/api/Merchandise/Search';
  public static ProductDelete: string = '/api/Merchandise/DeleteSoft';
  public static GetProductMaterialByCategoryID: string =
    '/api/Merchandise/GetProductMaterialByCategoryID';
  public static GetProductLabels: string = '/api/Merchandise/GetProductLabels';

  // Simple PO
  public static SamplePoSearchDropdownsAPI: string = '/api/Merchandise/GetCompanies';
  public static SamplePOSearch: string = '/api/Merchandise/SearchPO';
  public static SamplePODelete: string = '/api/Merchandise/DeletePO';

  // RFQ History
  public static RFQHistoryDropdownsAPI: string = '/api/Merchandise/GetCompanies';
  public static RFQHistorySearch: string = '/api/Merchandise/SearchRfq';
  public static RFQHistoryDelete: string = '/api/Merchandise/DeleteRFQ';

  //Add Product
  public static CountryAPI: string = '/api/Merchandise/GetCountry';
  public static PortOfLandingAPI: string = '/api/Merchandise/GetPortOfLoading';
  public static SaveProductNote: string = '/api/Merchandise/SaveNote';

  public static GetRejectedStyleNumberAPI: string = '/api/Merchandise/GetRejectedStyleNumber';
  public static GetPOSubmittedHistoryAPI: string = '/api/Merchandise/GetPOHistoryBYProductID';

  // Contacts
  public static ContactSearch: string = '/api/Contact/Search';
  public static UpdateCompany: string = '/api/Contact/UpdateCompany';
  public static InsertCompany: string = '/api/Contact/InsertCompany';
  public static UpdateContact: string = '/api/Contact/UpdateContact';
  public static InsertContact: string = '/api/Contact/InsertContact';
  public static GetDropdownForAddCompany: string = '/api/Contact/GetDropdownForAddCompany';
  public static GetAllCompanies: string = '/api/Contact/GetAllCompanies';
  public static GetPortOfLoadingByCountry: string = '/api/Contact/GetPortOfLoadingByCountry';

  // Create RFQ
  public static GetRFQAPI: string = '/api/Merchandise/GetRFQ';
  public static GetRFQByGuidIdAPI: string = '/api/Merchandise/GetRFQBYGUID/';
  public static GetRFQByIdAPI: string = '/api/Merchandise/GetRFQByID/';
  public static InsertRFQAPI: string = '/api/Merchandise/InsertRFQ';
  public static GetRFQDropdownDataAPI: string = '/api/Merchandise/GetAddProductDropdowns';
  public static UpdateRFQAPI: string = '/api/Merchandise/UpdateRFQ';

  //#region  Product Search
  public static ProductExportDropdownsAPI: string =
    '/api/Merchandise/GetProductExportSearchDropdowns';
  public static ProductExportSearch: string = '/api/Merchandise/SearchExport';
  public static ProductExportData: string = '/api/Merchandise/ExportSheet';

  //#endregion

  //#region Create SEF
  public static GetAddSalesManagerDropdowns: string =
    '/api/SalesManger/GetAddSalesManagerDropdowns';
  public static GetContactDropdowns: string = '/api/SalesManger/GetContactDropdowns';
  public static InsertSalesEvent: string = '/api/SalesManger/InsertSalesEvent';
  public static UpdateSEFProduct: string = '/api/SalesManger/UpdatedSEF';
  public static GetSEFById: string = '/api/SalesManger/GetByID';
  public static RemoveSEFProduct: string = '/api/SalesManger/RemoveProduct';
  public static UpdateSalesEvent: string = '/api/SalesManger/UpdateSalesEvent';
  public static AddRelatedSEF: string = '/api/SalesManger/AddRelatedSEF';
  public static SaveSEFNote: string = '/api/SalesManger/SaveNote';
  public static RecalculateProducts: string = '/api/SalesManger/ReCalculate';
  public static SaveSEFCalculationsProducts: string = '/api/SalesManger/SaveSEFCalculations';
  public static SaveSEFCalculationsProductsSort: string = '/api/SalesManger/Sort';
  public static CreateSalesSheet: string = '/api/SalesManger/GenerateSalesSheet';
  public static DeleteSalesEvent: string = '/api/SalesManger/DeleteSEF';
  public static ProductExportPrintLabel: string = '/api/Merchandise/ExportLabels';

  public static ForgotPassword: string = '/api/User/ForgotPassword';


  //endregion
  public static GetSEFProducts: string = '/api/SalesManger/GetProducts';

  /* #region Search SEF */
  public static SearchSEF: string = '/api/SalesManger/Search';
  public static SearchSEFFetchAllDropdowns: string = '/api/SalesManger/GetSearchSalesManagerDropdowns';
  
  /* #endregion */

  /* #region Sample PO */
  public static GetSamplePO: string = '/api/Merchandise/GetPO';
  public static GetPOByID: string = '/api/Merchandise/GetPOByID';

  public static CreateSamplePO: string = '/api/Merchandise/InsertPO';
  public static GetSamplePOByGuid: string = '/api/Merchandise/GetPOBYGUID';
  public static UpdatePO: string = '/api/Merchandise/UpdatePO';

  /* #endregion */

  // #region Reports
  public static GetReportDropdowns: string = '/api/Report/GetReportSearchDropdowns';
  public static ReportSearch: string = '/api/Report/Search';
  // #endregion

  // #region Lookup
  public static GetAllLookupsDropdowns: string = '/api/Lookup/GetAllLookups';
  public static InsertOrUpdateTheme: string = '/api/Lookup/InsertUpdateTheme';
  public static GetAllThemes: string = '/api/Lookup/GetAllThemes';
  public static InsertOrUpdateProductCategory: string = '/api/Lookup/InsertUpdateProductCategory';
  public static GetAllProductCategories: string = '/api/Lookup/GetAllProductCategories';
  public static InsertOrUpdateProductType: string = '/api/Lookup/InsertUpdateProductType';
  public static GetAllProductTypes: string = '/api/Lookup/GetAllProductTypes';
  public static InsertOrUpdateProductColor: string = '/api/Lookup/InsertUpdateProductColor';
  public static GetAllProductColors: string = '/api/Lookup/GetAllProductColors';
  public static InsertOrUpdateProductShape: string = '/api/Lookup/InsertUpdateProductShape';
  public static GetAllProductShapes: string = '/api/Lookup/GetAllProductShapes';
  public static InsertOrUpdateProductMaterial: string = '/api/Lookup/InsertUpdateProductMaterial';
  public static GetAllProductMaterial: string = '/api/Lookup/GetAllProductMaterial';
  public static InsertOrUpdateCountryOfOrigin: string = '/api/Lookup/InsertUpdateCountryOfOrigin';
  public static GetAllCountryOfOrigins: string = '/api/Lookup/GetAllCountryOfOrigins';
  public static InsertOrUpdatePortOfLoading: string = '/api/Lookup/InsertUpdatePortOfLoading';
  public static GetAllPortOfLoadings: string = '/api/Lookup/GetAllPortOfLoadings';
  // #endregion
}
