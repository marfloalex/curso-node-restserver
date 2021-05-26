const { response,request } = require('express');
const Usuario=require('../models/usuario');
const bcryptjs=require('bcryptjs');

const usuariosGet=(req=request, res=response)=> {
    
    const {q,nombre='No name',apikey,page='10',limit}=req.query;
    res.json({

        ok:true,
        msg:'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
  }


const usuariosPost= async(req, res=response)=> {

    //Body para devolver todo lo enviado en el consumo
    const {nombre,correo,password,rol}=req.body;
    const usuario= new Usuario({nombre,correo,password,rol});
    
    //encriptar contraseña
    const salt=bcryptjs.genSaltSync();
    usuario.password=bcryptjs.hashSync(password,salt);

    //Guardar
    await usuario.save();

    res.status(201).json({

        ok:true,
        usuario
    })
}
 

const usuariosPut= async(req, res=response)=> {

    const {id}=req.params;
    const {_id,password,google,correo,...resto}=req.body;

    //TODo validar contra base de datos
    if(password){
        
        //encriptar contraseña
        const salt=bcryptjs.genSaltSync();
        resto.password=bcryptjs.hashSync(password,salt);
    }

    const usuario=await Usuario.findByIdAndUpdate(id,resto);

    res.json({

        msg:'put API - Controlador',
        usuario //resto
    })
}

const usuariosPatch=(req, res=response)=> {
    res.json({

        ok:true,
        msg:'patch API - Controlador'
    })
}

const usuariosDelete=(req, res=response)=> {
   
    const id=req.params.id;
    
    res.json({

        ok:true,
        msg:'delete API - Controlador',
        id
    })
}


const usuariosGetJson=(req, res=response)=> {
   
    
    res.json({

        
            "ARInvoiceDataSet": [
                {
                  "InvcHead": {
                    "Company": 890906397,
                    "InvoiceType": "InvoiceType",
                    "CalculationRate_c": 0,
                    "DateCalculationRate_c": "2019-12-16",
                    "InvoiceNum": 53093,
                    "LegalNumber": "N53093",
                    "InvoiceRef": "",
                    "ContactName": "GONZALO VALLEJO",
                    "CustNum": 800162553,
                    "CustomerName": "PQUIM S.A.S.",
                    "PercentTaxAIU": 0,
                    "InvoiceDate": "12/16/2019 00:00:00",
                    "DueDate": "01/30/2020 00:00:00",
                    "OrderNum": 32846,
                    "DspDocSubTotal": 10092700,
                    "DocTaxAmt": 1917613,
                    "DocWHTaxAmt": 0,
                    "DspDocInvoiceAmt": 12010313,
                    "DspValueDebt": 0,
                    "InvoiceComment": "",
                    "CurrencyCodeCurrencyID": "COP",
                    "CurrencyCode": "COP",
                    "NetWeight": 100,
                    "GrossWeight": 101.2,
                    "NumberBoxes": 0,
                    "ContingencyInvoiceDian_c": "False",
                    "ContingencyInvoiceOF_c": "False",
                    "ManualContingencyRange": "",
                    "IssueDateContingency": "",
                    "InvoiceMandate": "False",
                    "SalesRepCode1": "",
                    "SalesRepCode2": "",
                    "SalesRepCode3": "",
                    "SalesRepName1": "",
                    "SalesRepName2": "",
                    "SalesRepName3": "",
                    "Character01": "AUTORRETENEDORES SEGUN RESOLUCION No 000131 DEL 27 DE SEPT/93. - SOMOS GRANDES CONTRIBUYENTES RES 7929 DEL 22 DE NOV/96 - IVA REGIMEN COMUN",
                    "PONum": "3203M-3215M",
                    "TermsCode": 52,
                    "TermsCodeDescription": "PAGO A 45 DÍAS F.F.",
                    "Date01": "12/16/2019 00:00:00",
                    "ShipViaCodeDescription": "TERRESTRE TIR TRUCK",
                    "Character02": "",
                    "Character03": "",
                    "Character04": "",
                    "Character05": "PQUIM MEDELLIN MEDELLIN 3203M MADE IN COLOMBIA",
                    "Character06": "RESOLUCION DIAN No 18763002124206 - 2019/11/29 - NUMERACION DEL N-0053001 AL N-0055000    RESOLUCION DIAN No 18763002124206 - 2019/11/29 - NUMERACION DEL V-1701 AL V-2000",
                    "ShortChar01": "",
                    "PaymentMeansID_c": 2,
                    "PaymentMeansDescription": "Crédito",
                    "PaymentMeansCode_c": 1,
                    "PaymentDurationMeasure": 45,
                    "PaymentDueDate": "01/30/2020"
                  },
                  "InvcDtl": [
                    {
                      "Company": 890906397,
                      "InvoiceNum": 53093,
                      "InvoiceLine": 1,
                      "PartNum": 9911014,
                      "LineDesc": "AZUL COBALTO P110.GOD 20250",
                      "PartNumPartDescription": "AZUL COBALTO P110.GOD 20250",
                      "SellingShipQty": 100,
                      "SalesUM": "Kg",
                      "UnitPrice": 100927,
                      "DocUnitPrice": 100927,
                      "DocExtPrice": 10092700,
                      "DspDocExtPrice": 10092700,
                      "DiscountPercent": 0,
                      "Discount": 0,
                      "DocDiscount": 0,
                      "DspDocLessDiscount": 0,
                      "DspDocTotalMiscChrg": 0,
                      "CurrencyCode": "COP",
                      "NetWeight": 0,
                      "GrossWeight": 0,
                      "NumberBoxes": 0,
                      "ShipViaCodeDescription": 0,
                      "Number01": 4,
                      "Character01": ""
                    },
                    {
                      "Company": 890906397,
                      "InvoiceNum": 53093,
                      "InvoiceLine": 1,
                      "PartNum": 9911014,
                      "LineDesc": "AZUL COBALTO P110.GOD 20250",
                      "PartNumPartDescription": "AZUL COBALTO P110.GOD 20250",
                      "SellingShipQty": 100,
                      "SalesUM": "Kg",
                      "UnitPrice": 100927,
                      "DocUnitPrice": 100927,
                      "DocExtPrice": 10092700,
                      "DspDocExtPrice": 10092700,
                      "DiscountPercent": 0,
                      "Discount": 0,
                      "DocDiscount": 0,
                      "DspDocLessDiscount": 0,
                      "DspDocTotalMiscChrg": 0,
                      "CurrencyCode": "COP",
                      "NetWeight": 0,
                      "GrossWeight": 0,
                      "NumberBoxes": 0,
                      "ShipViaCodeDescription": 0,
                      "Number01": 4,
                      "Character01": ""
                    },
                    {
                      "Company": 890906397,
                      "InvoiceNum": 53093,
                      "InvoiceLine": 1,
                      "PartNum": 9911014,
                      "LineDesc": "AZUL COBALTO P110.GOD 20250",
                      "PartNumPartDescription": "AZUL COBALTO P110.GOD 20250",
                      "SellingShipQty": 100,
                      "SalesUM": "Kg",
                      "UnitPrice": 100927,
                      "DocUnitPrice": 100927,
                      "DocExtPrice": 10092700,
                      "DspDocExtPrice": 10092700,
                      "DiscountPercent": 0,
                      "Discount": 0,
                      "DocDiscount": 0,
                      "DspDocLessDiscount": 0,
                      "DspDocTotalMiscChrg": 0,
                      "CurrencyCode": "COP",
                      "NetWeight": 0,
                      "GrossWeight": 0,
                      "NumberBoxes": 0,
                      "ShipViaCodeDescription": 0,
                      "Number01": 4,
                      "Character01": ""
                    }
                  ],
                  "InvcTax": [
                    {
                      "Company": 890906397,
                      "InvoiceNum": 53093,
                      "InvoiceLine": 1,
                      "CurrencyCode": "COP",
                      "RateCode": "IVA19",
                      "DocTaxableAmt": 10092700,
                      "TaxAmt": 1917613,
                      "DocTaxAmt": 1917613,
                      "Percent": 19,
                      "WithholdingTax_c": false
                    },
                    {
                      "Company": 890906397,
                      "InvoiceNum": 53093,
                      "InvoiceLine": 1,
                      "CurrencyCode": "COP",
                      "RateCode": "IVA19",
                      "DocTaxableAmt": 10092700,
                      "TaxAmt": 1917613,
                      "DocTaxAmt": 1917613,
                      "Percent": 19,
                      "WithholdingTax_c": false
                    },
                    {
                      "Company": 890906397,
                      "InvoiceNum": 53093,
                      "InvoiceLine": 1,
                      "CurrencyCode": "COP",
                      "RateCode": "IVA19",
                      "DocTaxableAmt": 10092700,
                      "TaxAmt": 1917613,
                      "DocTaxAmt": 1917613,
                      "Percent": 19,
                      "WithholdingTax_c": false
                    }
                  ],
                  "InvcMisc": {
                    "Company": 890906397,
                    "InvoiceNum": 53093,
                    "InvoiceLine": 1,
                    "MiscCode": "",
                    "Description": "",
                    "MiscAmt": 0,
                    "DocMiscAmt": 0,
                    "Percentage": 0,
                    "MiscCodeDescription": ""
                  },
                  "Company": {
                    "Company": 890906397,
                    "StateTaxID": 890906397,
                    "IdentificationType": 31,
                    "Name": "FERRO COLOMBIA S.A.S",
                    "RegimeType_c": 5,
                    "FiscalResposability_c": "O-99",
                    "OperationType_c": 5,
                    "CompanyType_c": 1,
                    "State": "ANTIOQUIA",
                    "StateNum": 5,
                    "City": "MEDELLIN",
                    "CityNum": 5001,
                    "PostalZone": "",
                    "Country": "COLOMBIA",
                    "Address1": "CRRA 46 # 52-82 PISO 9",
                    "PhoneNum": "574 4444646",
                    "FaxNum": "",
                    "ShortChar01": 5133374,
                    "EMailAddress": "ferrocolombia@ferro.com"
                  },
                  "Customer": {
                    "Company": 890906397,
                    "CustID": 800162553,
                    "CustNum": 800162553,
                    "ResaleID": 800162553,
                    "Character01": "",
                    "Name": "PQUIM S.A.S.",
                    "State": "ANTIOQUIA",
                    "City": "MEDELLIN",
                    "Country": "COLOMBIA",
                    "PostalZone": "",
                    "Address1": "CARRERA 57 No. 49-115CP 050010",
                    "EMailAddress": "facturacionferro@outlook.com;ana.garces@ferro.com;angela.lopez@ferro.com;any12345@live.com;facturacion@pquim.com.co",
                    "PhoneNum": "513 3876-513-2161",
                    "FaxNum": "",
                    "CurrencyCode": "COP",
                    "RegimeType_c": 5,
                    "FiscalResposability_c": "O-99",
                    "StateNum": 5,
                    "CityNum": 5001,
                    "Address2": "",
                    "Address3": "",
                    "ShipToState": "ANTIOQUIA",
                    "ShipToCity": "",
                    "ShipToAddress1": "CALLE 65  55-53\r\nEL CHAGUALO",
                    "ShipToCountry": "CO",
                    "PostalCode": ""
                  },
                  "SalesTRC": [
                    {
                      "Company": 890906397,
                      "RateCode": "IVA19",
                      "TaxCode": "IVA19",
                      "Description": "IVA 19%",
                      "IdImpDIAN_c": 1
                    },
                    {
                      "Company": 890906397,
                      "RateCode": "IVA19",
                      "TaxCode": "IVA19",
                      "Description": "IVA 19%",
                      "IdImpDIAN_c": 1
                    },
                    {
                      "Company": 890906397,
                      "RateCode": "IVA19",
                      "TaxCode": "IVA19",
                      "Description": "IVA 19%",
                      "IdImpDIAN_c": 1
                    }
                  ],
                  "COOneTime": {
                    "Company": 890906397,
                    "IdentificationType": 31,
                    "COOneTimeID": 800162553,
                    "CompanyName": "PQUIM S.A.S.",
                    "CountryCode": "CO"
                  },
                  "PrepaidPayment": {
                    "PaidDate": "2017-12-01",
                    "PaidTime": "12:00:00",
                    "PaidAmount": 0
                  }
                },
                {
                  "InvcHead": {
                    "Company": 890906397,
                    "InvoiceType": "InvoiceType",
                    "CalculationRate_c": 0,
                    "DateCalculationRate_c": "2019-12-16",
                    "InvoiceNum": 53093,
                    "LegalNumber": "N53093",
                    "InvoiceRef": "",
                    "ContactName": "GONZALO VALLEJO",
                    "CustNum": 800162553,
                    "CustomerName": "PQUIM S.A.S.",
                    "PercentTaxAIU": 0,
                    "InvoiceDate": "12/16/2019 00:00:00",
                    "DueDate": "01/30/2020 00:00:00",
                    "OrderNum": 32846,
                    "DspDocSubTotal": 10092700,
                    "DocTaxAmt": 1917613,
                    "DocWHTaxAmt": 0,
                    "DspDocInvoiceAmt": 12010313,
                    "DspValueDebt": 0,
                    "InvoiceComment": "",
                    "CurrencyCodeCurrencyID": "COP",
                    "CurrencyCode": "COP",
                    "NetWeight": 100,
                    "GrossWeight": 101.2,
                    "NumberBoxes": 0,
                    "ContingencyInvoiceDian_c": "False",
                    "ContingencyInvoiceOF_c": "False",
                    "ManualContingencyRange": "",
                    "IssueDateContingency": "",
                    "InvoiceMandate": "False",
                    "SalesRepCode1": "",
                    "SalesRepCode2": "",
                    "SalesRepCode3": "",
                    "SalesRepName1": "",
                    "SalesRepName2": "",
                    "SalesRepName3": "",
                    "Character01": "AUTORRETENEDORES SEGUN RESOLUCION No 000131 DEL 27 DE SEPT/93. - SOMOS GRANDES CONTRIBUYENTES RES 7929 DEL 22 DE NOV/96 - IVA REGIMEN COMUN",
                    "PONum": "3203M-3215M",
                    "TermsCode": 52,
                    "TermsCodeDescription": "PAGO A 45 DÍAS F.F.",
                    "Date01": "12/16/2019 00:00:00",
                    "ShipViaCodeDescription": "TERRESTRE TIR TRUCK",
                    "Character02": "",
                    "Character03": "",
                    "Character04": "",
                    "Character05": "PQUIM MEDELLIN MEDELLIN 3203M MADE IN COLOMBIA",
                    "Character06": "RESOLUCION DIAN No 18763002124206 - 2019/11/29 - NUMERACION DEL N-0053001 AL N-0055000    RESOLUCION DIAN No 18763002124206 - 2019/11/29 - NUMERACION DEL V-1701 AL V-2000",
                    "ShortChar01": "",
                    "PaymentMeansID_c": 2,
                    "PaymentMeansDescription": "Crédito",
                    "PaymentMeansCode_c": 1,
                    "PaymentDurationMeasure": 45,
                    "PaymentDueDate": "01/30/2020"
                  },
                  "InvcDtl": [
                    {
                      "Company": 890906397,
                      "InvoiceNum": 53093,
                      "InvoiceLine": 1,
                      "PartNum": 9911014,
                      "LineDesc": "AZUL COBALTO P110.GOD 20250",
                      "PartNumPartDescription": "AZUL COBALTO P110.GOD 20250",
                      "SellingShipQty": 100,
                      "SalesUM": "Kg",
                      "UnitPrice": 100927,
                      "DocUnitPrice": 100927,
                      "DocExtPrice": 10092700,
                      "DspDocExtPrice": 10092700,
                      "DiscountPercent": 0,
                      "Discount": 0,
                      "DocDiscount": 0,
                      "DspDocLessDiscount": 0,
                      "DspDocTotalMiscChrg": 0,
                      "CurrencyCode": "COP",
                      "NetWeight": 0,
                      "GrossWeight": 0,
                      "NumberBoxes": 0,
                      "ShipViaCodeDescription": 0,
                      "Number01": 4,
                      "Character01": ""
                    },
                    {
                      "Company": 890906397,
                      "InvoiceNum": 53093,
                      "InvoiceLine": 1,
                      "PartNum": 9911014,
                      "LineDesc": "AZUL COBALTO P110.GOD 20250",
                      "PartNumPartDescription": "AZUL COBALTO P110.GOD 20250",
                      "SellingShipQty": 100,
                      "SalesUM": "Kg",
                      "UnitPrice": 100927,
                      "DocUnitPrice": 100927,
                      "DocExtPrice": 10092700,
                      "DspDocExtPrice": 10092700,
                      "DiscountPercent": 0,
                      "Discount": 0,
                      "DocDiscount": 0,
                      "DspDocLessDiscount": 0,
                      "DspDocTotalMiscChrg": 0,
                      "CurrencyCode": "COP",
                      "NetWeight": 0,
                      "GrossWeight": 0,
                      "NumberBoxes": 0,
                      "ShipViaCodeDescription": 0,
                      "Number01": 4,
                      "Character01": ""
                    },
                    {
                      "Company": 890906397,
                      "InvoiceNum": 53093,
                      "InvoiceLine": 1,
                      "PartNum": 9911014,
                      "LineDesc": "AZUL COBALTO P110.GOD 20250",
                      "PartNumPartDescription": "AZUL COBALTO P110.GOD 20250",
                      "SellingShipQty": 100,
                      "SalesUM": "Kg",
                      "UnitPrice": 100927,
                      "DocUnitPrice": 100927,
                      "DocExtPrice": 10092700,
                      "DspDocExtPrice": 10092700,
                      "DiscountPercent": 0,
                      "Discount": 0,
                      "DocDiscount": 0,
                      "DspDocLessDiscount": 0,
                      "DspDocTotalMiscChrg": 0,
                      "CurrencyCode": "COP",
                      "NetWeight": 0,
                      "GrossWeight": 0,
                      "NumberBoxes": 0,
                      "ShipViaCodeDescription": 0,
                      "Number01": 4,
                      "Character01": ""
                    }
                  ],
                  "InvcTax": [
                    {
                      "Company": 890906397,
                      "InvoiceNum": 53093,
                      "InvoiceLine": 1,
                      "CurrencyCode": "COP",
                      "RateCode": "IVA19",
                      "DocTaxableAmt": 10092700,
                      "TaxAmt": 1917613,
                      "DocTaxAmt": 1917613,
                      "Percent": 19,
                      "WithholdingTax_c": false
                    },
                    {
                      "Company": 890906397,
                      "InvoiceNum": 53093,
                      "InvoiceLine": 1,
                      "CurrencyCode": "COP",
                      "RateCode": "IVA19",
                      "DocTaxableAmt": 10092700,
                      "TaxAmt": 1917613,
                      "DocTaxAmt": 1917613,
                      "Percent": 19,
                      "WithholdingTax_c": false
                    },
                    {
                      "Company": 890906397,
                      "InvoiceNum": 53093,
                      "InvoiceLine": 1,
                      "CurrencyCode": "COP",
                      "RateCode": "IVA19",
                      "DocTaxableAmt": 10092700,
                      "TaxAmt": 1917613,
                      "DocTaxAmt": 1917613,
                      "Percent": 19,
                      "WithholdingTax_c": false
                    }
                  ],
                  "InvcMisc": {
                    "Company": 890906397,
                    "InvoiceNum": 53093,
                    "InvoiceLine": 1,
                    "MiscCode": "",
                    "Description": "",
                    "MiscAmt": 0,
                    "DocMiscAmt": 0,
                    "Percentage": 0,
                    "MiscCodeDescription": ""
                  },
                  "Company": {
                    "Company": 890906397,
                    "StateTaxID": 890906397,
                    "IdentificationType": 31,
                    "Name": "FERRO COLOMBIA S.A.S",
                    "RegimeType_c": 5,
                    "FiscalResposability_c": "O-99",
                    "OperationType_c": 5,
                    "CompanyType_c": 1,
                    "State": "ANTIOQUIA",
                    "StateNum": 5,
                    "City": "MEDELLIN",
                    "CityNum": 5001,
                    "PostalZone": "",
                    "Country": "COLOMBIA",
                    "Address1": "CRRA 46 # 52-82 PISO 9",
                    "PhoneNum": "574 4444646",
                    "FaxNum": "",
                    "ShortChar01": 5133374,
                    "EMailAddress": "ferrocolombia@ferro.com"
                  },
                  "Customer": {
                    "Company": 890906397,
                    "CustID": 800162553,
                    "CustNum": 800162553,
                    "ResaleID": 800162553,
                    "Character01": "",
                    "Name": "PQUIM S.A.S.",
                    "State": "ANTIOQUIA",
                    "City": "MEDELLIN",
                    "Country": "COLOMBIA",
                    "PostalZone": "",
                    "Address1": "CARRERA 57 No. 49-115CP 050010",
                    "EMailAddress": "facturacionferro@outlook.com;ana.garces@ferro.com;angela.lopez@ferro.com;any12345@live.com;facturacion@pquim.com.co",
                    "PhoneNum": "513 3876-513-2161",
                    "FaxNum": "",
                    "CurrencyCode": "COP",
                    "RegimeType_c": 5,
                    "FiscalResposability_c": "O-99",
                    "StateNum": 5,
                    "CityNum": 5001,
                    "Address2": "",
                    "Address3": "",
                    "ShipToState": "ANTIOQUIA",
                    "ShipToCity": "",
                    "ShipToAddress1": "CALLE 65  55-53\r\nEL CHAGUALO",
                    "ShipToCountry": "CO",
                    "PostalCode": ""
                  },
                  "SalesTRC": [
                    {
                      "Company": 890906397,
                      "RateCode": "IVA19",
                      "TaxCode": "IVA19",
                      "Description": "IVA 19%",
                      "IdImpDIAN_c": 1
                    },
                    {
                      "Company": 890906397,
                      "RateCode": "IVA19",
                      "TaxCode": "IVA19",
                      "Description": "IVA 19%",
                      "IdImpDIAN_c": 1
                    },
                    {
                      "Company": 890906397,
                      "RateCode": "IVA19",
                      "TaxCode": "IVA19",
                      "Description": "IVA 19%",
                      "IdImpDIAN_c": 1
                    }
                  ],
                  "COOneTime": {
                    "Company": 890906397,
                    "IdentificationType": 31,
                    "COOneTimeID": 800162553,
                    "CompanyName": "PQUIM S.A.S.",
                    "CountryCode": "CO"
                  },
                  "PrepaidPayment": {
                    "PaidDate": "2017-12-01",
                    "PaidTime": "12:00:00",
                    "PaidAmount": 0
                  }
                }
              ]
        },

    )
}

module.exports={
    
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    usuariosGetJson

}