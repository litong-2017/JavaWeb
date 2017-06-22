package com.mstf.utils;

import poi.ExcelUtil;
import poi.IExcelExport;
import poi.impl.RecordExport;
import poi.impl.consumer.RecordComsumer;
import poi.model.RecordPoi;
import poi.model.Sala;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
//生成及导出Excel的测试类
public class ExcelTest {
    @Test
    public void TestExcel() {
        IExcelExport excelExport = new RecordExport();

        List<Sala> recordPoiList = new ArrayList<Sala>();
        
        	Sala recordPoi = new Sala();
            recordPoi.setId(1);
            recordPoi.setNumber("dc");
            recordPoi.setName("CBB");
            recordPoi.setDept_name("33425678902");
            recordPoi.setLevel("ss");
            recordPoi.setBase(2);
            recordPoi.setSubsidys(3);
            recordPoi.setPrizes(4);
            recordPoi.setChecks(5);
            recordPoi.setYfgz(6);
            recordPoi.setSfgz(7);

            recordPoiList.add(recordPoi);
        
        excelExport.setPoiList(recordPoiList);
        String fileName = System.getProperty("java.io.tmpdir") + File.separator + excelExport.getTitle();
        File file = new File(fileName);
        OutputStream out = null;
        try {
            out = new FileOutputStream(file);
            ExcelUtil.export(excelExport, out);

            ExcelUtil.excelImport(file, fileName, new RecordComsumer());
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                out.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
