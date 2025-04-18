import * as XLSX from 'xlsx'
import FileSaver from 'file-saver'

export const ExportToExcel =({ProductData , user}) =>{  
  const fileType = "xlsx"
  const exportToCSV =()=>{
     const product = XLSX.utils.json_to_sheet(ProductData);
     const user1 = XLSX.utils.json_to_sheet(user);
     const wb ={Sheets:{product:product, user:user1 }, SheetNames: ["product","user"]};
     const excelBuffer = XLSX.write(wb, {bookType:"xlsx", type:"array"});
     const data = new Blob([excelBuffer], {type:fileType});
     

     FileSaver.saveAs(data, "myfile"+".xlsx")
  }



   return ( 
      <button type='button' onClick={exportToCSV} >Download File</button>
   )
   
}