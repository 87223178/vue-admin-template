<template>
  <el-card class="f-full-card">
    <template #header>
      <div class="f-card-header">
        <div>
          <span>DemoCard</span>
          <span class="describe">Card 的一些排版示例</span>
        </div>
      </div>
    </template>

    <div>
      <h2>.f-full-card 样式</h2>
      <p>
        用来 固定 card 的 header
        <el-tag type="success" effect="dark"> {{'<el-card class="f-full-card"></el-card>'}} </el-tag>
      </p>

      <h2>.f-card-header 样式</h2>
      <p>flex 布局的 card - header</p>

      <el-card>
        <template #header>
          <div class="f-card-header">
            <div>
              <span>这是标题</span>
              <span class="describe">这是副标题</span>
            </div>
            <div>
              <el-button type="primary">这是一个有颜色的 button</el-button>
            </div>
          </div>
        </template>

        <div>header 分成两份</div>
      </el-card>

      <el-card>
        <template #header>
          <div class="f-card-header">
            <div>
              <span>这是标题</span>
              <span class="describe">这是副标题</span>
            </div>

            <div>
              <el-radio-group v-model="radio1">
                <el-radio-button label="New York" />
                <el-radio-button label="Washington" />
                <el-radio-button label="Los Angeles" />
                <el-radio-button label="Chicago" />
              </el-radio-group>
            </div>

            <div>
              <el-button>这是一个 button</el-button>
              <el-button type="primary">这是一个有颜色的 button</el-button>
            </div>
          </div>
        </template>

        <div>header 分成三份</div>
      </el-card>

      <p><el-tag>begin</el-tag></p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p>撑开高度</p>
      <p><el-tag>end</el-tag></p>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class DemoCardView extends Vue {
  radio1 = 'New York';
}
</script>
