package com.mstf.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class SubsidyExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public SubsidyExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        protected void addCriterionForJDBCDate(String condition, Date value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value.getTime()), property);
        }

        protected void addCriterionForJDBCDate(String condition, List<Date> values, String property) {
            if (values == null || values.size() == 0) {
                throw new RuntimeException("Value list for " + property + " cannot be null or empty");
            }
            List<java.sql.Date> dateList = new ArrayList<java.sql.Date>();
            Iterator<Date> iter = values.iterator();
            while (iter.hasNext()) {
                dateList.add(new java.sql.Date(iter.next().getTime()));
            }
            addCriterion(condition, dateList, property);
        }

        protected void addCriterionForJDBCDate(String condition, Date value1, Date value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value1.getTime()), new java.sql.Date(value2.getTime()), property);
        }

        public Criteria andSubsidyIdIsNull() {
            addCriterion("subsidy_id is null");
            return (Criteria) this;
        }

        public Criteria andSubsidyIdIsNotNull() {
            addCriterion("subsidy_id is not null");
            return (Criteria) this;
        }

        public Criteria andSubsidyIdEqualTo(Integer value) {
            addCriterion("subsidy_id =", value, "subsidyId");
            return (Criteria) this;
        }

        public Criteria andSubsidyIdNotEqualTo(Integer value) {
            addCriterion("subsidy_id <>", value, "subsidyId");
            return (Criteria) this;
        }

        public Criteria andSubsidyIdGreaterThan(Integer value) {
            addCriterion("subsidy_id >", value, "subsidyId");
            return (Criteria) this;
        }

        public Criteria andSubsidyIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("subsidy_id >=", value, "subsidyId");
            return (Criteria) this;
        }

        public Criteria andSubsidyIdLessThan(Integer value) {
            addCriterion("subsidy_id <", value, "subsidyId");
            return (Criteria) this;
        }

        public Criteria andSubsidyIdLessThanOrEqualTo(Integer value) {
            addCriterion("subsidy_id <=", value, "subsidyId");
            return (Criteria) this;
        }

        public Criteria andSubsidyIdIn(List<Integer> values) {
            addCriterion("subsidy_id in", values, "subsidyId");
            return (Criteria) this;
        }

        public Criteria andSubsidyIdNotIn(List<Integer> values) {
            addCriterion("subsidy_id not in", values, "subsidyId");
            return (Criteria) this;
        }

        public Criteria andSubsidyIdBetween(Integer value1, Integer value2) {
            addCriterion("subsidy_id between", value1, value2, "subsidyId");
            return (Criteria) this;
        }

        public Criteria andSubsidyIdNotBetween(Integer value1, Integer value2) {
            addCriterion("subsidy_id not between", value1, value2, "subsidyId");
            return (Criteria) this;
        }

        public Criteria andNumberIsNull() {
            addCriterion("number is null");
            return (Criteria) this;
        }

        public Criteria andNumberIsNotNull() {
            addCriterion("number is not null");
            return (Criteria) this;
        }

        public Criteria andNumberEqualTo(String value) {
            addCriterion("number =", value, "number");
            return (Criteria) this;
        }

        public Criteria andNumberNotEqualTo(String value) {
            addCriterion("number <>", value, "number");
            return (Criteria) this;
        }

        public Criteria andNumberGreaterThan(String value) {
            addCriterion("number >", value, "number");
            return (Criteria) this;
        }

        public Criteria andNumberGreaterThanOrEqualTo(String value) {
            addCriterion("number >=", value, "number");
            return (Criteria) this;
        }

        public Criteria andNumberLessThan(String value) {
            addCriterion("number <", value, "number");
            return (Criteria) this;
        }

        public Criteria andNumberLessThanOrEqualTo(String value) {
            addCriterion("number <=", value, "number");
            return (Criteria) this;
        }

        public Criteria andNumberLike(String value) {
            addCriterion("number like", value, "number");
            return (Criteria) this;
        }

        public Criteria andNumberNotLike(String value) {
            addCriterion("number not like", value, "number");
            return (Criteria) this;
        }

        public Criteria andNumberIn(List<String> values) {
            addCriterion("number in", values, "number");
            return (Criteria) this;
        }

        public Criteria andNumberNotIn(List<String> values) {
            addCriterion("number not in", values, "number");
            return (Criteria) this;
        }

        public Criteria andNumberBetween(String value1, String value2) {
            addCriterion("number between", value1, value2, "number");
            return (Criteria) this;
        }

        public Criteria andNumberNotBetween(String value1, String value2) {
            addCriterion("number not between", value1, value2, "number");
            return (Criteria) this;
        }

        public Criteria andSubsidyTypeIsNull() {
            addCriterion("subsidy_type is null");
            return (Criteria) this;
        }

        public Criteria andSubsidyTypeIsNotNull() {
            addCriterion("subsidy_type is not null");
            return (Criteria) this;
        }

        public Criteria andSubsidyTypeEqualTo(String value) {
            addCriterion("subsidy_type =", value, "subsidyType");
            return (Criteria) this;
        }

        public Criteria andSubsidyTypeNotEqualTo(String value) {
            addCriterion("subsidy_type <>", value, "subsidyType");
            return (Criteria) this;
        }

        public Criteria andSubsidyTypeGreaterThan(String value) {
            addCriterion("subsidy_type >", value, "subsidyType");
            return (Criteria) this;
        }

        public Criteria andSubsidyTypeGreaterThanOrEqualTo(String value) {
            addCriterion("subsidy_type >=", value, "subsidyType");
            return (Criteria) this;
        }

        public Criteria andSubsidyTypeLessThan(String value) {
            addCriterion("subsidy_type <", value, "subsidyType");
            return (Criteria) this;
        }

        public Criteria andSubsidyTypeLessThanOrEqualTo(String value) {
            addCriterion("subsidy_type <=", value, "subsidyType");
            return (Criteria) this;
        }

        public Criteria andSubsidyTypeLike(String value) {
            addCriterion("subsidy_type like", value, "subsidyType");
            return (Criteria) this;
        }

        public Criteria andSubsidyTypeNotLike(String value) {
            addCriterion("subsidy_type not like", value, "subsidyType");
            return (Criteria) this;
        }

        public Criteria andSubsidyTypeIn(List<String> values) {
            addCriterion("subsidy_type in", values, "subsidyType");
            return (Criteria) this;
        }

        public Criteria andSubsidyTypeNotIn(List<String> values) {
            addCriterion("subsidy_type not in", values, "subsidyType");
            return (Criteria) this;
        }

        public Criteria andSubsidyTypeBetween(String value1, String value2) {
            addCriterion("subsidy_type between", value1, value2, "subsidyType");
            return (Criteria) this;
        }

        public Criteria andSubsidyTypeNotBetween(String value1, String value2) {
            addCriterion("subsidy_type not between", value1, value2, "subsidyType");
            return (Criteria) this;
        }

        public Criteria andSubsidyIsNull() {
            addCriterion("subsidy is null");
            return (Criteria) this;
        }

        public Criteria andSubsidyIsNotNull() {
            addCriterion("subsidy is not null");
            return (Criteria) this;
        }

        public Criteria andSubsidyEqualTo(Integer value) {
            addCriterion("subsidy =", value, "subsidy");
            return (Criteria) this;
        }

        public Criteria andSubsidyNotEqualTo(Integer value) {
            addCriterion("subsidy <>", value, "subsidy");
            return (Criteria) this;
        }

        public Criteria andSubsidyGreaterThan(Integer value) {
            addCriterion("subsidy >", value, "subsidy");
            return (Criteria) this;
        }

        public Criteria andSubsidyGreaterThanOrEqualTo(Integer value) {
            addCriterion("subsidy >=", value, "subsidy");
            return (Criteria) this;
        }

        public Criteria andSubsidyLessThan(Integer value) {
            addCriterion("subsidy <", value, "subsidy");
            return (Criteria) this;
        }

        public Criteria andSubsidyLessThanOrEqualTo(Integer value) {
            addCriterion("subsidy <=", value, "subsidy");
            return (Criteria) this;
        }

        public Criteria andSubsidyIn(List<Integer> values) {
            addCriterion("subsidy in", values, "subsidy");
            return (Criteria) this;
        }

        public Criteria andSubsidyNotIn(List<Integer> values) {
            addCriterion("subsidy not in", values, "subsidy");
            return (Criteria) this;
        }

        public Criteria andSubsidyBetween(Integer value1, Integer value2) {
            addCriterion("subsidy between", value1, value2, "subsidy");
            return (Criteria) this;
        }

        public Criteria andSubsidyNotBetween(Integer value1, Integer value2) {
            addCriterion("subsidy not between", value1, value2, "subsidy");
            return (Criteria) this;
        }

        public Criteria andSubsidyTimeIsNull() {
            addCriterion("subsidy_time is null");
            return (Criteria) this;
        }

        public Criteria andSubsidyTimeIsNotNull() {
            addCriterion("subsidy_time is not null");
            return (Criteria) this;
        }

        public Criteria andSubsidyTimeEqualTo(Date value) {
            addCriterionForJDBCDate("subsidy_time =", value, "subsidyTime");
            return (Criteria) this;
        }

        public Criteria andSubsidyTimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("subsidy_time <>", value, "subsidyTime");
            return (Criteria) this;
        }

        public Criteria andSubsidyTimeGreaterThan(Date value) {
            addCriterionForJDBCDate("subsidy_time >", value, "subsidyTime");
            return (Criteria) this;
        }

        public Criteria andSubsidyTimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("subsidy_time >=", value, "subsidyTime");
            return (Criteria) this;
        }

        public Criteria andSubsidyTimeLessThan(Date value) {
            addCriterionForJDBCDate("subsidy_time <", value, "subsidyTime");
            return (Criteria) this;
        }

        public Criteria andSubsidyTimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("subsidy_time <=", value, "subsidyTime");
            return (Criteria) this;
        }

        public Criteria andSubsidyTimeIn(List<Date> values) {
            addCriterionForJDBCDate("subsidy_time in", values, "subsidyTime");
            return (Criteria) this;
        }

        public Criteria andSubsidyTimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("subsidy_time not in", values, "subsidyTime");
            return (Criteria) this;
        }

        public Criteria andSubsidyTimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("subsidy_time between", value1, value2, "subsidyTime");
            return (Criteria) this;
        }

        public Criteria andSubsidyTimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("subsidy_time not between", value1, value2, "subsidyTime");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}