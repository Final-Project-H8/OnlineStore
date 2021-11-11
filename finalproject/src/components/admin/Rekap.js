import React from "react";

const Rekap = () =>
{
    return(
        <div className="p-2">
            <h1 className="pb-2">Rekap Penjualan</h1>
            <table className="table border">
                <thead>
                    <tr>
                        <th width="70%">Product</th>
                        <th className="text-center" width="10%">Harga</th>
                        <th className="text-center" width="10%">Terjual</th>
                        <th className="text-center" width="10%">Pendapatan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Barang 1</td>
                        <td className="text-center">$ 10</td>
                        <td className="text-center">10</td>
                        <td className="text-center">$ 10</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td style={{textAlign:'center', fontWeight:'bold'}}>Total Pendapatan</td>
                        <td></td>
                        <td></td>
                        <td className="text-center">10</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Rekap;