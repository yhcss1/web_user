import http from "@/utils/http";
type EXAM_RESOURCE = {
  exam_id: number
  pattern_id: string | number
  whether_zt: boolean
  page?: number
  limit?: number
}
export const request_getExamResource = (data: EXAM_RESOURCE) => {
  return http.post(`/api/system/microservice/resource/`, data)
}

export type EXAN_START = {
  q_type: 'practice' | 'mock_exam'
  account_id: number
  question_ids: number[]
}

export const request_startExam = (data: EXAN_START) => {
  return http.post(`/api/system/microservice/create_mock/`, data)
}

export const request_getExam = (id: string) => {
  return http.get(`/api/system/microservice/get_mock/${id}`)
}
// 查看答题状态 进度
export type ANSWER_STATUS = {
  is_answer: boolean;
  question_id: number;
  answer: number[];
}
export const request_getExamStutas = (id: string) => {
  return http.get<Array<ANSWER_STATUS>>(`/api/system/microservice/answer_status/${id}/`)
}
type EXAM_ANSWER = {
  question_id: number
  answer: number[]
  duration: number
  answer_voice_link?: string
  sheet_id: number | string
}
// 保存答案
export const request_saveAnswer = (data: EXAM_ANSWER) => {
  return http.post(`/api/system/microservice/answer_panel/`, data)
}
// 结束考试提交
export const request_submitExam = (sheet_id: string) => {
  return http.post(`/api/system/microservice/submit_answers/${sheet_id}/`)
}

// 计算得分
export const request_computed_score = (sheet_id: string) => {
  return http.post(`api/system/microservice/scoring/${sheet_id}/`)
}

// 获取得分
export const request_get_result = (sheet_id: string) => {
  return http.get(`api/system/microservice/get_score/${sheet_id}/`)
}