"use strict";
exports.__esModule = true;
var react_1 = require("react");
var bankdetails_json_1 = require("../bankdetails.json");
var react_2 = require("@carbon/react");
var Table = react_2.DataTable.Table, TableBody = react_2.DataTable.TableBody, TableCell = react_2.DataTable.TableCell, TableHead = react_2.DataTable.TableHead, TableHeader = react_2.DataTable.TableHeader, TableRow = react_2.DataTable.TableRow;
var BankDetailsPage = function () {
    var headers = ['id', 'account_type', 'Balance'];
    return react_1["default"].createElement(Table, { size: "lg", useZebraStyles: false, "aria-label": "sample table" },
        react_1["default"].createElement(TableHead, null,
            react_1["default"].createElement(TableRow, null, headers.map(function (header) { return react_1["default"].createElement(TableHeader, { id: header, key: header }, header); }))),
        react_1["default"].createElement(TableBody, null, bankdetails_json_1["default"].map(function (row) { return react_1["default"].createElement(TableRow, { key: row.id }, headers.map(function (header) { return (react_1["default"].createElement(TableCell, { key: header }, row[header.toLowerCase()])); })); })));
};
exports["default"] = BankDetailsPage;
