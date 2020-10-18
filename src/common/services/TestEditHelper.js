import isUndefined from "../IsUndefined";
import {toCustomFormat} from "../convertDate";
import InvalidDateFormatException from "../exceptions/InvalidException";

class TestEditHelper {
    constructor(api, test) {
        this.api = api;
        this.test = test;
        this.changeCounter = 0;
        this.isNew = isUndefined(test.id);
    }

    getTest() {
        return this.test;
    }

    updateValue(testAttribute, value) {
        this.changeCounter++;
        this.test[testAttribute] = value;
    }

    sendChanges() {
        if (this.changeCounter > 0) {
            if (this.isNew) {
                if (!isUndefined(this.test.title)) {
                    this.api.saveTest(this.prepareTest());
                    console.log("save");
                }
            } else {
                this.api.updateTest(this.prepareTest());
                console.log("update");
            }
            this.changeCounter = 0;
        }
    }

    prepareTest() {
        let test = this.test;
        try {
            test.date = !isUndefined(test.date) ? toCustomFormat(new Date(test.date)) : toCustomFormat(new Date());
        } catch (e) {
            if (e instanceof InvalidDateFormatException) {
            //       That means the date is already formatted
            }
        }

        let maxScore = 0;

        if (!isUndefined(test.questions)) {
            // Delete non questions
            test.questions = test.questions.filter(q => q.questionText !== "PLACEHOLDER");
            // Delete temp ids
            // and get maxScore
            let index = 0;

            test.questions.map(q => {
                if (q.id < 0) {
                    delete q.id;
                }

                q.answers.map(a => {
                    delete a.serialNumber;
                    return a;
                });

                if (q.serialNumber === index) {
                    maxScore += q.reward;
                    index++;
                }

                return q;
            });
        }

        test.maxScore = maxScore;

        return test;
    }

}

export default TestEditHelper;