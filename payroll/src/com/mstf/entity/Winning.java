package com.mstf.entity;

public class Winning {
    private Integer winningId;

    private String number;

    private String prizeType;
    
	private User user;
    
    private Prize prize;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Prize getPrize() {
		return prize;
	}

	public void setPrize(Prize prize) {
		this.prize = prize;
	}

    public Integer getWinningId() {
        return winningId;
    }

    public void setWinningId(Integer winningId) {
        this.winningId = winningId;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number == null ? null : number.trim();
    }

    public String getPrizeType() {
        return prizeType;
    }

    public void setPrizeType(String prizeType) {
        this.prizeType = prizeType == null ? null : prizeType.trim();
    }
}