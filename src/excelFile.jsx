import * as XLSX from 'xlsx'
import FileSaver from 'file-saver'

export const ExportToExcel =({userDetail}) =>{  
  const fileType = "xlsx"
  const exportToCSV =()=>{
     const ws = XLSX.utils.json_to_sheet(userDetail);
     const wb ={Sheets:{product:ws} , SheetNames: ["product"]}
     const excelBuffer = XLSX.write(wb, {bookType:"xlsx", type:"array"})
     const data = new Blob([excelBuffer], {type:fileType});
     FileSaver.saveAs(data,"myfile"+".xlsx")
  }

   return ( 
      <button type='button' onClick={exportToCSV} >Download File</button>
   )
   
}