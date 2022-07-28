import { _saveQuestion, _saveQuestionAnswer, _getUsers, _getQuestions } from "../utils/_DATA";

describe("_getUsers", () => {
    it("should return all the users", async () => {
        const totalUsers = await _getUsers();
        expect(Object.keys(totalUsers).length).toEqual(3);
    });
});

describe("_getQuestions", () => {
    it("should return all the questions", async () => {
        const totalQuestions = await _getQuestions();
        expect(Object.keys(totalQuestions).length).toEqual(6);
    });
});

describe("_saveQuestion", () => {
    it(`should save question and return valid object matching the input`, async () => {
        const sampleInput = {
            author: "sarahedo",
            optionOneText: "Option One",
            optionTwoText: "Option Two"
        };

        const actualQuestion = await _saveQuestion(sampleInput);
        expect(actualQuestion.author).toBe("sarahedo");
        expect(actualQuestion.optionOne.text).toBe("Option One");
        expect(actualQuestion.optionTwo.text).toBe("Option Two");
    });

    it(`should save question and return valid object matching the input`, async () => {
        const sampleInput = {
            author: "tylermcginnis",
            optionOneText: "Option One",
            optionTwoText: "Option Two"
        };

        const actualQuestion = await _saveQuestion(sampleInput);
        expect(actualQuestion.author).toBe("tylermcginnis");
        expect(actualQuestion.optionOne.text).toBe("Option One");
        expect(actualQuestion.optionTwo.text).toBe("Option Two");
    });

    it('should reject and return error message', async () => {
        const sampleInput = {}
        await expect(_saveQuestion(sampleInput)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author')
    })
});

describe("_saveQuestionAnswer", () => {
    it(`should update the users object with the answer saved for the authed-User,
        aswell as the questions object and return true`, async () => {
        const sampleInput = {
            authedUser: "sarahedo",
            qid: "8xf0y6ziyjabvozdd253nd",
            answer: "optionOne"
        };

        const actualAnswer = _saveQuestionAnswer(sampleInput);
        expect(actualAnswer).toBeInstanceOf(Promise);
    });

    it('should reject and return error message', async () => {
        const sampleInput = {}
        await expect(_saveQuestionAnswer(sampleInput)).rejects.toEqual('Please provide authedUser, qid, and answer')
    })
});

