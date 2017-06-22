package poi.impl.consumer;

import poi.IExcelConsumer;
import poi.model.RecordPoi;
import poi.model.Sala;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;

import java.util.ArrayList;
import java.util.List;

public class RecordComsumer implements IExcelConsumer {
    @Override
    public void consume(Sheet sheet) {
        List<Sala> recordPois = new ArrayList<Sala>();
        for (int i = 1; i <= sheet.getLastRowNum(); i++) {
            if (i % 500 == 0) {
                //在这里 处理 提取出来的数据
//                recordPoiMapper.batchInsert(recordPois);
                System.out.println("Excel解析出 size:" + recordPois.size() + "recordPois:" + recordPois.toString());
                recordPois = null;
                recordPois = new ArrayList<Sala>();
            }
            Row row = sheet.getRow(i);
            Sala recordPoi = new Sala();

            recordPoi.setId(Integer.parseInt(row.getCell(0).getStringCellValue()));
            recordPoi.setNumber(row.getCell(1).getStringCellValue());
            recordPoi.setName(row.getCell(2).getStringCellValue());
            recordPoi.setDept_name(row.getCell(3).getStringCellValue());
            recordPoi.setLevel(row.getCell(4).getStringCellValue());
            recordPoi.setBase(Integer.parseInt(row.getCell(5).getStringCellValue()));
            recordPoi.setSubsidys(Integer.parseInt(row.getCell(6).getStringCellValue()));
            recordPoi.setPrizes(Integer.parseInt(row.getCell(7).getStringCellValue()));
            recordPoi.setChecks(Integer.parseInt(row.getCell(8).getStringCellValue()));
            recordPoi.setYfgz(Integer.parseInt(row.getCell(9).getStringCellValue()));
            recordPoi.setSfgz(Integer.parseInt(row.getCell(10).getStringCellValue()));

            recordPois.add(recordPoi);
        }
        if (recordPois != null && recordPois.size() > 0) {
            //在这里 处理 500除余,提取出来的数据
//            recordPoiMapper.batchInsert(recordPois);
            System.out.println("Excel解析出 size:" + recordPois.size() + "recordPois:" + recordPois.toString());
            recordPois = null;
        }
    }
}
