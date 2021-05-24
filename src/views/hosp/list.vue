<template>
  <div class="api-container">
    <el-table :data="list" stripe style="width: 100%">
      <el-table-column type="index" width="50" />
      <el-table-column prop="hosname" label="医院名称" />
      <el-table-column prop="hoscode" label="医院编号" />
      <el-table-column prop="apiUrl" label="api基础路径" width="200" />
      <el-table-column prop="contactsName" label="联系人姓名" />
      <el-table-column prop="contactsPhone" label="联系人手机" />
      <el-table-column label="状态" width="80">
        <template slot-scope="scope">
          {{ scope.row.status === 1 ? "可用" : "不可用" }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import hospset from "@/api/hospset";

export default {
  data() {
    return {
      current: 1,
      limit: 3,
      searchObj: {},
      list: [],
      total: 0
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      hospset
        .getHospSetList(this.current, this.limit, this.searchObj)
        .then((res) => {
          this.list = res.data.records;
          this.total = res.data.total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>