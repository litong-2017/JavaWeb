package com.mstf.entity;
public class Subsidy {
    private Integer subsidyId;

    private String number;

    private String subsidyType;

    private Integer subsidys;

    public Integer getSubsidys() {
		return subsidys;
	}

	public void setSubsidys(Integer subsidys) {
		this.subsidys = subsidys;
	}

	private String subsidyTime;
    
    private User user;

    public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Integer getSubsidyId() {
        return subsidyId;
    }

    public void setSubsidyId(Integer subsidyId) {
        this.subsidyId = subsidyId;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number == null ? null : number.trim();
    }

    public String getSubsidyType() {
        return subsidyType;
    }

    public void setSubsidyType(String subsidyType) {
        this.subsidyType = subsidyType == null ? null : subsidyType.trim();
    }


    public String getSubsidyTime() {
        return subsidyTime;
    }

    public void setSubsidyTime(String subsidyTime) {
        this.subsidyTime = subsidyTime;
    }
}