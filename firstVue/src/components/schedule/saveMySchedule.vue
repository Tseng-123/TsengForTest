<template>
    <div>
        <h2>我的日程安排</h2>
        <br>
        <hr>
        <div>
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="主题" >
                    <el-input v-model="schedule.titel" placeholder="请输入主题" style="width: 250px"></el-input>
                </el-form-item>
                <el-form-item label="地点" >
                    <el-input v-model="schedule.address"placeholder="请输入地点" style="width: 250px"></el-input>
                </el-form-item>
                <el-form-item label="会议类型">
                    <el-select v-model="schedule.meetingName" placeholder="请选择会议类型" style="width: 250px">
                        <el-option 
                            v-for="item in meetingNames"
                            :key="item.id" 
                            :label="item.name"
                            :value=item.id>
                        </el-option>
                     </el-select>
                </el-form-item>
                <el-form-item label="选择时间">
                    <el-date-picker
                        v-model="time"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        style="width: 450px">
                    </el-date-picker>
                    <!-- <el-date-picker
                        v-model="beginTime"
                        tyep="datetime"
                        aria-placeholder="选择开始时间">
                    </el-date-picker>
                    <span>-</span>
                    <el-date-picker
                        v-model="endTime"
                        tyep="datetime"
                        aria-placeholder="选择结束时间">
                    </el-date-picker> -->
                </el-form-item>
                <el-form-item label="提醒内容">
                    <el-input type="textarea" autosize v-model="schedule.schContent" placeholder="请输入提醒内容" style="width: 450px"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>预约他人</span>
                            <el-button type="danger" icon="el-icon-delete" size="small" style="float: right;margin: 5px;"></el-button>
                            <el-dropdown style="float: right;">
                                <el-button type="primary" icon="el-icon-plus" size="small" style="float: right;margin: 5px"><i class="el-icon-arrow-down"></i></el-button>
                                <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>
                                             <el-tree
                                                :data="data2"
                                                show-checkbox
                                                default-expand-all
                                                node-key="id"
                                                ref="tree"
                                                highlight-current
                                                :props="defaultProps">
                                            </el-tree>
                                        </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                            </div>
                        <div v-for="userName in user" :key="userId" class="text">{{user.departName}}-{{user.userName}}</div>
                    </el-card>
                </el-form-item>
                <el-form-item label="选项：">
                    <el-radio v-model="schedule.IfPrivate" label="1">公开</el-radio>
                    <el-radio v-model="schedule.IfPrivate" label="0">不公开</el-radio>
                    <span v-model="user.userName">创建者：{{user.userName}}</span>
                    <span v-model="schedule.createTime" style="margin-left: 20px">创建日期：{{schedule.createTime}}</span>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="small">保存退出</el-button>
                    <el-button type="primary" size="small">删除</el-button>
                    <el-button type="primary" size="small">退出</el-button>
                </el-form-item>
            </el-form>
        </div> 
    </div>
</template>
<script>
    export default {
        data () {
            return{
                data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
                schedule:{
                    titel: '',
                    meetingName:'',
                    address:'',
                    schContent:'',
                    time: ['beginTime','endTime'],
                    createTime: '',
                    IfPrivate: [0,1],
                    },
            meetingNames: [{
                id: '1',
                name: '公司年会',
            },{
                id: '2',
                name: '机构会议',
            },{
                id: '3',
                name: '部门会议',
            },{
                id: '4',
                name: '小组会议',
            },{
                id: '5',
                name: '外部合作会议',
            }],
            user:{
                userId: '',
                userName: '',
                departName: ''
                }
        }
      },
      methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }   
}
</script>
<style>
.el-icon-circle-plus:hover{
    color: #409eff
        }
.text{
    font-size: 14px;
}
.item{
    margin-bottom: 18px;
}
.clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>