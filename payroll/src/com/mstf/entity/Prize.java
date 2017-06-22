package com.mstf.entity;

public class Prize {
    private Integer prizeId;

    private String prizeType;

    private Integer prizes;
    
    private Winning winning;

    public Winning getWinning() {
		return winning;
	}

	public void setWinning(Winning winning) {
		this.winning = winning;
	}

    public Integer getPrizes() {
		return prizes;
	}

	public void setPrizes(Integer prizes) {
		this.prizes = prizes;
	}

	private String prizeTime;

    public Integer getPrizeId() {
        return prizeId;
    }

    public void setPrizeId(Integer prizeId) {
        this.prizeId = prizeId;
    }

    public String getPrizeType() {
        return prizeType;
    }

    public void setPrizeType(String prizeType) {
        this.prizeType = prizeType == null ? null : prizeType.trim();
    }


    public String getPrizeTime() {
        return prizeTime;
    }

    public void setPrizeTime(String prizeTime) {
        this.prizeTime = prizeTime;
    }
}