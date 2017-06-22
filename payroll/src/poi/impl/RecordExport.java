package poi.impl;

import poi.IExcelExport;
import poi.model.RecordPoi;
import org.apache.commons.lang.StringUtils;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

//定义所要生成的Excel的基本数据
public class RecordExport implements IExcelExport<RecordPoi> {
    List<RecordPoi> poiList = new ArrayList<RecordPoi>();
    private String title;
    String[] headers = {"序号", "员工编号", "姓名", "所在店铺", "等级", "基本工资", "月补贴", "月奖金", "考勤扣款", "应发工资", "实发工资"};

    public String[] getHeader() {
        return headers;
    }

    public int getHeaderSize() {
        return headers.length;
    }

    public String getTitle() {
        if (StringUtils.isEmpty(title)) {
            return formatDate(new Date(), "yyyy-MM-dd_HH-mm-ss") + "-工资表.xls";
        } else {
            return title;
        }
    }

    private String formatDate(Date date, String format) {
        SimpleDateFormat dateFormat = new SimpleDateFormat(format);
        return dateFormat.format(date);
    }

    public boolean containSpecialField(String filedName) {
        return false;
    }

    public String getSpecialFieldValue(String filedName) {
        return null;
    }

    public List<RecordPoi> getPoiList() {
        return this.poiList;
    }

    public void setPoiList(List<RecordPoi> data) {
        this.poiList = data;
    }
}
