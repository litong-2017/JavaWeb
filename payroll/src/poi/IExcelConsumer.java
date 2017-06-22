package poi;

import org.apache.poi.ss.usermodel.Sheet;

public interface IExcelConsumer {
    /**
     * 读取excel
     *
     * @param sheet
     */
    void consume(Sheet sheet);
}
