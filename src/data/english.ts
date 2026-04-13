// 英语基础知识数据
export const englishData = {
  name: '英语',
  chapters: [
    {
      id: 'e1',
      name: '词汇辨析',
      icon: '📝',
      sections: [
        {
          id: 'e1-1',
          name: '易混词汇',
          points: [
            {
              id: 'e1p1-1',
              title: ' accept vs except',
              content: 'accept: 动词，"接受"；except: 介词，"除...之外"。',
              example: 'Everyone attended the meeting except Tom. (除了Tom大家都参加了会议)',
            },
            {
              id: 'e1p1-2',
              title: 'affect vs effect',
              content: 'affect: 动词，"影响"；effect: 名词/"影响"或动词/"实现"。',
              example: 'The weather affects my mood. / The effect was amazing.',
            },
            {
              id: 'e1p1-3',
              title: 'their vs there vs they\'re',
              content: 'their: 他们的(所有格)；there: 那里(地点)；they\'re: they are(缩写)。',
              example: 'They\'re going to their house over there.',
            },
            {
              id: 'e1p1-4',
              title: 'your vs you\'re',
              content: 'your: 你的(所有格)；you\'re: you are(缩写)。',
              example: 'You\'re a good student. (你是个好学生)',
            },
            {
              id: 'e1p1-5',
              title: 'its vs it\'s',
              content: 'its: 它的(所有格，无撇号)；it\'s: it is 或 it has(缩写)。',
              example: 'It\'s a beautiful day. Its sun is shining.',
            },
          ],
        },
        {
          id: 'e1-2',
          name: '词性转换',
          points: [
            {
              id: 'e1p2-1',
              title: '名词变形容词',
              content: '-ful: care-careful, hope-hopeful；-less: hope-hopeless, care-careless；-al: nation-national, education-educational；-y: health-healthy, wealth-wealthy。',
              example: 'beauty-beautiful, danger-dangerous, invention-inventive',
            },
            {
              id: 'e1p2-2',
              title: '动词变名词',
              content: '-tion: invent-invention, educate-education；-er/or: teach-teacher, act-actor；-ing: feel-feeling, dream-dreaming。',
              example: 'decide-decision, describe-description',
            },
            {
              id: 'e1p2-3',
              title: '形容词变副词',
              content: '-ly: quick-quickly, happy-happily；e变y: simple-simply, terrible-terribly。',
              example: 'She sings beautifully. / He answered simply.',
            },
          ],
        },
      ],
    },
    {
      id: 'e2',
      name: '语法基础',
      icon: '📚',
      sections: [
        {
          id: 'e2-1',
          name: '时态',
          points: [
            {
              id: 'e2p1-1',
              title: '一般现在时',
              content: '表示经常性、习惯性动作或客观事实。主语+动词原形(第三人称单数+s/es)。',
              example: 'I study English every day. / She studies English every day.',
            },
            {
              id: 'e2p1-2',
              title: '现在进行时',
              content: '表示正在进行的动作。结构：be(am/is/are) + V-ing。',
              example: 'I am reading a book now. / They are playing football.',
            },
            {
              id: 'e2p1-3',
              title: '一般过去时',
              content: '表示过去发生的动作。动词用过去式(规则动词加-ed，不规则需记忆)。',
              example: 'I visited Beijing last year. / She bought a new bag.',
            },
            {
              id: 'e2p1-4',
              title: '过去进行时',
              content: '表示过去某一时刻正在进行的动作。结构：was/were + V-ing。',
              example: 'I was watching TV at 8 o\'clock last night.',
            },
            {
              id: 'e2p1-5',
              title: '现在完成时',
              content: '表示过去发生并影响现在的动作。结构：have/has + 过去分词。',
              example: 'I have finished my homework. / She has lived here for 10 years.',
            },
            {
              id: 'e2p1-6',
              title: '过去完成时',
              content: '表示过去某一时刻之前发生的动作。结构：had + 过去分词。',
              example: 'When I arrived, the train had left.',
            },
            {
              id: 'e2p1-7',
              title: '一般将来时',
              content: 'will + 动词原形；be going to + 动词原形。',
              example: 'I will visit my grandmother tomorrow. / It is going to rain.',
            },
          ],
        },
        {
          id: 'e2-2',
          name: '从句',
          points: [
            {
              id: 'e2p2-1',
              title: '宾语从句',
              content: 'that/if/whether + 主语 + 谓语。注意时态呼应。',
              example: 'I think that he is right. / She asked if I could come.',
            },
            {
              id: 'e2p2-2',
              title: '定语从句',
              content: '用who/whom/which/that引导，修饰名词或代词。who/that指人，which/that指物。',
              example: 'The book which I bought is interesting. / The boy who is playing is my brother.',
            },
            {
              id: 'e2p2-3',
              title: '状语从句',
              content: '时间：when/while/as/before/after/since；条件：if/unless；原因：because/as/since；结果：so...that/so that；目的：so that/in order that。',
              example: 'I was reading when the phone rang. / Study hard so that you can pass the exam.',
            },
          ],
        },
        {
          id: 'e2-3',
          name: '被动语态',
          points: [
            {
              id: 'e2p3-1',
              title: '被动语态构成',
              content: 'be + 过去分词。不同时态：一般现在时am/is/are + done；一般过去时was/were + done；一般将来时will be + done；现在完成时have/has been + done。',
              example: 'English is spoken in many countries. / The book was written by Mo Yan.',
            },
          ],
        },
        {
          id: 'e2-4',
          name: '虚拟语气',
          points: [
            {
              id: 'e2p4-1',
              title: '虚拟语气用法',
              content: '与现在相反：if + 主语 + were/did, 主语 + would/could/might + do。与过去相反：if + 主语 + had done, 主语 + would/could/might + have done。',
              example: 'If I were you, I would study harder. / If I had studied, I would have passed.',
            },
          ],
        },
      ],
    },
    {
      id: 'e3',
      name: '阅读技巧',
      icon: '📖',
      sections: [
        {
          id: 'e3-1',
          name: '阅读方法',
          points: [
            {
              id: 'e3p1-1',
              title: '略读(Skimming)',
              content: '快速浏览文章获取大意。注意首段、末段、每段首句。',
              example: '阅读说明文时，先看标题和每段开头了解文章大意',
            },
            {
              id: 'e3p1-2',
              title: '扫读(Scanning)',
              content: '带着问题快速查找特定信息。忽略无关内容。',
              example: '做题时先看题目，然后回文章找对应关键词',
            },
            {
              id: 'e3p1-3',
              title: '精读(Close Reading)',
              content: '仔细阅读文章，理解细节、推理和作者态度。',
              example: '对于不理解的长难句，要分析句子结构',
            },
          ],
        },
        {
          id: 'e3-2',
          name: '解题技巧',
          points: [
            {
              id: 'e3p2-1',
              title: '细节题',
              content: '回到原文定位关键词，注意同义替换。注意时间、数字、原因等具体信息。',
              example: '题目问"When"，就找时间相关的句子',
            },
            {
              id: 'e3p2-2',
              title: '推理题',
              content: '不能直接找到答案，需要根据文章内容进行合理推断。注意but/however/because等逻辑词。',
              example: '文章说"Tom passed the exam with the highest score"可推断Tom学习很好',
            },
            {
              id: 'e3p2-3',
              title: '主旨题',
              content: '关注文章开头和结尾，注意反复出现的关键词。排除太具体或太宽泛的选项。',
              example: '最佳标题通常能概括全文主题',
            },
            {
              id: 'e3p2-4',
              title: '猜词题',
              content: '利用上下文语境、构词法(前缀后缀)、同义词反义词关系来猜测词义。',
              example: '"The ambitious man worked hard"中ambitious可能与hard work有关',
            },
          ],
        },
      ],
    },
    {
      id: 'e4',
      name: '写作句型',
      icon: '✍️',
      sections: [
        {
          id: 'e4-1',
          name: '开头句型',
          points: [
            {
              id: 'e4p1-1',
              title: '引出话题',
              content: 'Recently, ... has become a hot topic. / With the development of..., ... / It is generally believed that...',
              example: 'With the development of technology, AI has become a hot topic.',
            },
            {
              id: 'e4p1-2',
              title: '表达观点',
              content: 'In my opinion,... / As far as I am concerned,... / From my perspective,... / I hold the view that...',
              example: 'In my opinion, reading is very important for students.',
            },
          ],
        },
        {
          id: 'e4-2',
          name: '衔接句型',
          points: [
            {
              id: 'e4p2-1',
              title: '表因果',
              content: 'Therefore, ... / As a result, ... / Consequently, ... / Because of this, ...',
              example: 'He didn\'t study hard. As a result, he failed the exam.',
            },
            {
              id: 'e4p2-2',
              title: '表递进',
              content: 'Moreover,... / Furthermore,... / In addition,... / What\'s more,... / Besides,...',
              example: 'Reading can enlarge our knowledge. Moreover, it makes us more thoughtful.',
            },
            {
              id: 'e4p2-3',
              title: '表转折',
              content: 'However,... / Nevertheless,... / On the contrary,... / In contrast,... / Although...',
              example: 'Although learning English is difficult, it is very useful.',
            },
          ],
        },
        {
          id: 'e4-3',
          name: '结尾句型',
          points: [
            {
              id: 'e4p3-1',
              title: '总结观点',
              content: 'In conclusion,... / To sum up,... / In short,... / All in all,...',
              example: 'In conclusion, we should protect the environment.',
            },
            {
              id: 'e4p3-2',
              title: '提出建议',
              content: 'It is suggested that... / I suggest/advise that... / measures should be taken to...',
              example: 'Measures should be taken to reduce air pollution.',
            },
            {
              id: 'e4p3-3',
              title: '发出倡议',
              content: 'Let\'s take action now! / It\'s time for us to... / Everyone should...',
              example: 'It\'s time for us to work hard and achieve our dreams.',
            },
          ],
        },
      ],
    },
  ],
}

// 英语年级选项
export const englishGradeOptions = [
  { id: 'e1', name: '词汇辨析' },
  { id: 'e2', name: '语法基础' },
  { id: 'e3', name: '阅读技巧' },
  { id: 'e4', name: '写作句型' },
]
